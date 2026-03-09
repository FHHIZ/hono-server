import type { Context, Next } from "hono";
import BaseController from "../../base/controller.base.js";
import type { EditMyProfileType, EditProfileType } from "../../type/type.js";
import { UserService } from "./user.service.js";
import { roleLevel } from "../../helpers/roleGuard.js";

class UsersController extends BaseController {
  constructor() {
    super();
  }

  Me = async (c: Context) => {
    try {
      const id = c.get("jwtPayloadId");
      const data = await UserService.FindMyProfileSummaryById(id);
      if (!data) return this.badRequest(c, "Invalid user id.");
      return this.ok(c, "Success show me.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get account. ${error}`);
    }
  };

  GetAll = async (c: Context) => {
    try {
      const query = c.req.query("q") ?? "";

      const data = await UserService.FindAllProfileSummaryWithQuery(query);

      return this.ok(c, "Successfully get all user summary.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get all user summary. ${error}`);
    }
  };

  GetOne = async (c: Context) => {
    try {
      const param = c.req.param("id") || undefined;
      if (!param) return this.badRequest(c, "User id or slug is required");

      const data = await UserService.FindOneProfileDetailByIdOrSlug(param);

      if (!data) return this.notFound(c, "User not found.");
      return this.ok(c, "Successfuly get user detail.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get user detail. ${error}`);
    }
  };

  UpdateMe = async (c: Context) => {
    try {
      const id = c.get("jwtPayloadId");
      const body = await c.req.json<EditMyProfileType>();

      if (!id) {
        return this.badRequest(c, "Id user not found!");
      }

      const isUser = await UserService.IsUserExist(id);
      if (!isUser) return this.notFound(c, "Your account not found.");

      const isEmail = await UserService.IsEmailExist(body.email);
      if (isEmail) return this.conflict(c, "Email already exist.");

      const isSlug = await UserService.IsSlugExist(body.slug);
      if (isSlug) return this.conflict(c, "Slug already taken.");

      const data = await UserService.UpdateMyProfile(id, body);

      return this.ok(c, "Successfuly edit user", data);
    } catch (error) {
      return this.badRequest(c, `Failed to edit user. ${error}`);
    }
  };

  Update = async (c: Context) => {
    try {
      const id: string = c.req.param("id");
      const body = await c.req.json<EditProfileType>();
      const userRole = c.get("jwtPayloadRole");

      if (!id) {
        return this.badRequest(c, "User id is required");
      }

      const isUser = await UserService.IsUserExist(id);
      if (!isUser) return this.badRequest(c, "User not found.");

      const isEmail = await UserService.IsEmailExist(body.email);
      if (!isEmail) return this.badRequest(c, "Email already exist");

      if (body.role) roleLevel(userRole, body.role);

      const data = await UserService.UpdateProfile(id, body);

      return this.ok(c, "Successfuly edit user", data);
    } catch (error) {
      return this.badRequest(c, `Failed to edit user. ${error}`);
    }
  };
}

export default UsersController;
