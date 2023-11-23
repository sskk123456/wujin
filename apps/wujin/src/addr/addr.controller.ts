import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AddrService } from "./addr.service";
import { AddrControllerBase } from "./base/addr.controller.base";

@swagger.ApiTags("addrs")
@common.Controller("addrs")
export class AddrController extends AddrControllerBase {
  constructor(
    protected readonly service: AddrService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
