import type { Context, Next } from "hono";
import BaseController from "../../base/controller.base.js";
import type { UserUpdateType } from "../../type/type.js";
import { UserService } from "./user.service.js";
import { roleLevel } from "../../helpers/role.level.js";

class UsersController extends BaseController {
  constructor() {
    super();
  }

  me = async (c: Context) => {
    try {
      const id = c.get("jwtPayloadId");
      const data = await UserService.findById(id);
      return this.ok(c, "Success show me.", data!);
    } catch (error) {
      return this.badRequest(c, `Failed to get account. ${error}`);
    }
  };

  getAll = async (c: Context) => {
    try {
      const query = c.req.query("q") ?? "";

      const data = await UserService.findAllUser(query);

      return this.ok(c, "Successfully get all user.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get all user. ${error}`);
    }
  };

  getOne = async (c: Context) => {
    try {
      const id = c.req.param("id");

      if (!id) {
        return this.badRequest(c, "User id is required");
      }

      const data = await UserService.findOneUser(id);
      if (!data) return this.badRequest(c, "User not found.");

      return this.ok(c, "Successfuly get user.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get user. ${error}`);
    }
  };

  Update = async (c: Context, next: Next) => {
    try {
      const id: string = c.req.param("id");
      const body = await c.req.json<UserUpdateType>();
      const userRole = c.get("jwtPayloadRole");

      if (!id) {
        return this.badRequest(c, "User id is required");
      }

      const isUser = await UserService.findById(id);
      if (!isUser) return this.badRequest(c, "User not found.");

      const isEmail = await UserService.findByEmail(body.email);
      if (!isEmail) return this.badRequest(c, "Email already exist");

      if (body.role) roleLevel(userRole, body.role);

      const data = await UserService.updateUser(id, body);

      return this.ok(c, "Successfuly Edit user", data);
    } catch (error) {
      return this.badRequest(c, `Failed to update user. ${error}`);
    }
  };
}

export default UsersController;
