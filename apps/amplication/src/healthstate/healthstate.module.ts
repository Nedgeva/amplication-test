import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HealthstateModuleBase } from "./base/healthstate.module.base";
import { HealthstateService } from "./healthstate.service";
import { HealthstateController } from "./healthstate.controller";
import { HealthstateResolver } from "./healthstate.resolver";

@Module({
  imports: [HealthstateModuleBase, forwardRef(() => AuthModule)],
  controllers: [HealthstateController],
  providers: [HealthstateService, HealthstateResolver],
  exports: [HealthstateService],
})
export class HealthstateModule {}
