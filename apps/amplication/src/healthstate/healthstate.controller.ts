import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HealthstateService } from "./healthstate.service";
import { HealthstateControllerBase } from "./base/healthstate.controller.base";

@swagger.ApiTags("healthstates")
@common.Controller("healthstates")
export class HealthstateController extends HealthstateControllerBase {
  constructor(
    protected readonly service: HealthstateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
