import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import type { ClassType } from "../../type/type.js";
import { ClassService } from "./class.service.js";
import type { ClassGrade } from "../../generated/prisma/index.js";

class ClassController extends BaseController {
  constructor() {
    super();
  }

  getAll = async (c: Context) => {
    try {
      const clas = c.req.query("class") ?? "";
      const major = c.req.query("major") ?? "";
      const academic_year = c.req.query("academic_year") ?? "";

      const query = {
        class: (clas as ClassGrade) || undefined,
        major: major || undefined,
        academic_year: academic_year || undefined,
      };

      const data = await ClassService.findAllClass(query);

      return this.ok(c, "Successfuly get all class.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get all class. ${error}`);
    }
  };

  getOne = async (c: Context) => {
    try {
      const id = c.req.param("id");

      if (!id) {
        return this.badRequest(c, "Class id is required.");
      }

      const data = await ClassService.findOneClass(id);
      if (!data) return this.badRequest(c, "Class not found.");

      return this.ok(c, "Successfully get class.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get class. ${error}`);
    }
  };

  createClass = async (c: Context) => {
    try {
      const body = await c.req.json<ClassType>();
      const { classes, major, academicYear } = body;

      if (classes || major || academicYear) {
        const data = {
          classes: classes as ClassGrade,
          major: major,
          academicYear: academicYear,
        };

        const res = await ClassService.createClass(data);
        return this.ok(c, "Successfully createClass.", res);
      } else {
        return this.badRequest(c, "Please insert className, and academicYear.");
      }
    } catch (error) {
      return this.badRequest(c, `Failed to create class. ${error}`);
    }
  };

  Update = async (c: Context) => {
    try {
      const id: string = c.req.param("id");
      const body = await c.req.json<ClassType>();

      if (!id) {
        return this.badRequest(c, "Class id is required.");
      }

      const isClass = await ClassService.findById(id);
      if (!isClass) return this.badRequest(c, "Class not found.");

      const data = await ClassService.updateClass(id, body);

      return this.ok(c, "Successfuly update class.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to update class. ${error}`);
    }
  };
}

export default ClassController;
