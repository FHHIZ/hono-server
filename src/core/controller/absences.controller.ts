import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import type { updateAbsen } from "../../type/type.js";
import { AbsencesService } from "../service/absences.service.js";
import { Status } from "../../generated/prisma/index.js";

class AbsenController extends BaseController {
  constructor() {
    super(); 
  }

  getAll = async (c: Context) => {
      try {

          const query = c.req.query('q')
          const isValid = Object.values(Status).includes(query as Status);

          const data = await AbsencesService.findAllAbsen(isValid ? (query as Status) : undefined)

          return this.ok(c, "Successfuly get all Absen", data) 
      }   catch (error) {
          return this.badRequest(c, "succesulyy failed")
      }
    }

      getOne = async (c: Context) => {
      try {
        const id = c.req.param('id')

        if (!id) {
        return this.badRequest(c, "Absen id is required")
        }   

          const data = await AbsencesService.findOneAbsen(id)

          return this.ok(c, "Successfuly get one Absen", data) 
      }   catch (error) {
          return this.badRequest(c, "succesulyy failed")
      }
    }

    Update = async (c: Context) => {
      try {
        const id: string = c.req.param('id')
        const body = await c.req.json<updateAbsen>();

        if (!id) {
        return this.badRequest(c, "Absen id is required")
        }   

          const data = await AbsencesService.updateAbsen(id, body)

          return this.ok(c, "Successfuly Edit Absen", data) 
      }   catch (error) {
          return this.badRequest(c, "succesulyy failed")
      }
    }
  }

export default AbsenController;
