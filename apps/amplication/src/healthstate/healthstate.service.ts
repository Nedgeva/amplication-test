import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HealthstateServiceBase } from "./base/healthstate.service.base";

@Injectable()
export class HealthstateService extends HealthstateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
