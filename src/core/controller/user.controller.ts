import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import { AuthService } from "../service/auth.service.js";
import type { UserUpdateRequest } from "../../type/type.js";

class UsersController extends BaseController {
  constructor() {
    super(); 
  }

  getAll = async (c: Context) => {
      try {

        const query = c.req.query('q') ?? ''

          const data = await AuthService.findAllUser(query)

          return this.ok(c, "Successfuly get all user", data) 
      }   catch (error) {
          return this.badRequest(c, "succesulyy failed")
      }
    }

      getOne = async (c: Context) => {
      try {
        const id = c.req.param('id')

        if (!id) {
        return this.badRequest(c, "User id is required")
        }   

          const data = await AuthService.findOneUser(id)

          return this.ok(c, "Successfuly get one user", data) 
      }   catch (error) {
          return this.badRequest(c, "succesulyy failed")
      }
    }

    Update = async (c: Context) => {
      try {
        const id: string = c.req.param('id')
        const body = await c.req.json<UserUpdateRequest>();

        if (!id) {
        return this.badRequest(c, "User id is required")
        }   

          const data = await AuthService.updateUser(id, body)

          return this.ok(c, "Successfuly Edit user", data) 
      }   catch (error) {
          return this.badRequest(c, "succesulyy failed")
      }
    }
  }

export default UsersController;
