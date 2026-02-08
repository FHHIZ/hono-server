import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import type { createClass, updateClass } from "../../type/type.js";
import { ClassService } from "../service/class.service.js";

class ClassController extends BaseController {
  constructor() {
    super(); 
  }

  getAll = async (c: Context) => {
      try {

        const query = c.req.query('q') ?? ''

          const data = await ClassService.findAllClass(query)

          return this.ok(c, "Successfuly get all class", data) 
      }   catch (error) {
          return this.badRequest(c, "succesulyy failed")
      }
    }

      getOne = async (c: Context) => {
      try {
        const id = c.req.param('id')

        if (!id) {
        return this.badRequest(c, "Class id is required")
        }   

          const data = await ClassService.findOneClass(id)

          return this.ok(c, "Successfuly get one class", data) 
      }   catch (error) {
          return this.badRequest(c, "succesulyy failed")
      }
    }

    Update = async (c: Context) => {
      try {
        const id: string = c.req.param('id')
        const body = await c.req.json<updateClass>();

        if (!id) {
        return this.badRequest(c, "Class id is required")
        }   

          const data = await ClassService.updateClass(id, body)

          return this.ok(c, "Successfuly Edit class", data) 
      }   catch (error) {
          return this.badRequest(c, "succesulyy failed")
      }
    }

    createClass = async (c: Context) => {
        const body = await c.req.json<createClass>();
        const { className, academicYear } = body;
    
        if (!className || !academicYear)
          return this.badRequest(c, "Please insert className, and academicYear");
    
        const res = await ClassService.createClass({ className, academicYear });
        return this.ok(c, "Successfully createClass", res);
    };
  }

export default ClassController;
