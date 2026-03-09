import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import type { ClassType } from "../../type/type.js";
import { ClassService } from "./class.service.js";
import type { ClassGrade } from "../../generated/prisma/index.js";

class ClassController extends BaseController {
  constructor() {
    super();
  }

  GetAll = async (c: Context) => {
    try {
      const classes = c.req.query("class");
      const major = c.req.query("major");
      const academic_year = c.req.query("academic_year");

      if (academic_year && academic_year.length != 9)
        return this.badRequest(c, "Invalid academic_year.");

      const query = {
        class: (classes as ClassGrade) || undefined,
        major: major || undefined,
        academic_year: academic_year || undefined,
      };

      const data = await ClassService.FindAllClassSummaryWithId(query);

      return this.ok(c, "Successfuly get all class summary.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get all class summary. ${error}`);
    }
  };

  GetOne = async (c: Context) => {
    try {
      const id = c.req.param("id");

      if (!id) return this.badRequest(c, "Class id is required!");

      const data = await ClassService.FindOneClassDetailWithId(id);
      if (!data) return this.badRequest(c, "Class not found!");

      return this.ok(c, "Successfully get class detail.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get class detail. ${error}`);
    }
  };

  Create = async (c: Context) => {
    try {
      const body = await c.req.json<ClassType>();
      const { classes, major, academicYear } = body;

      if (!classes || !major || !academicYear)
        return this.badRequest(c, "Please insert className, and academicYear.");
      if (academicYear.length != 9)
        return this.badRequest(c, "Invalid academicYear.");

      const data = {
        classes: classes as ClassGrade,
        major: major,
        academicYear: academicYear,
      };

      const sameClass = await ClassService.FindClassMatch(data);
      if (sameClass) return this.badRequest(c, "Can`t make same class.");

      const res = await ClassService.CreateClass(data);
      return this.ok(c, "Successfully create class.", res);
    } catch (error) {
      return this.badRequest(c, `Failed to create class. ${error}`);
    }
  };

  Update = async (c: Context) => {
    try {
      const id: string = c.req.param("id");
      const body = await c.req.json<ClassType>();

      if (!id) return this.badRequest(c, "Class id is required.");

      const isClass = await ClassService.IsClassExist(id);
      if (!isClass) return this.badRequest(c, "Class not found.");

      const sameClass = await ClassService.FindClassMatch(body);
      if (sameClass) return this.badRequest(c, "Can`t make same class.");

      const data = await ClassService.UpdateClass(id, body);

      return this.ok(c, "Successfuly update class.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to update class. ${error}`);
    }
  };
}

export default ClassController;
