/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { HealthstateService } from "../healthstate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HealthstateCreateInput } from "./HealthstateCreateInput";
import { Healthstate } from "./Healthstate";
import { HealthstateFindManyArgs } from "./HealthstateFindManyArgs";
import { HealthstateWhereUniqueInput } from "./HealthstateWhereUniqueInput";
import { HealthstateUpdateInput } from "./HealthstateUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HealthstateControllerBase {
  constructor(
    protected readonly service: HealthstateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Healthstate })
  @nestAccessControl.UseRoles({
    resource: "Healthstate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createHealthstate(
    @common.Body() data: HealthstateCreateInput
  ): Promise<Healthstate> {
    return await this.service.createHealthstate({
      data: {
        ...data,

        userId: {
          connect: data.userId,
        },
      },
      select: {
        bloodPressureDia: true,
        bloodPressureSys: true,
        createdAt: true,
        feelings: true,
        id: true,
        pulse: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Healthstate] })
  @ApiNestedQuery(HealthstateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Healthstate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async healthstates(@common.Req() request: Request): Promise<Healthstate[]> {
    const args = plainToClass(HealthstateFindManyArgs, request.query);
    return this.service.healthstates({
      ...args,
      select: {
        bloodPressureDia: true,
        bloodPressureSys: true,
        createdAt: true,
        feelings: true,
        id: true,
        pulse: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Healthstate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Healthstate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async healthstate(
    @common.Param() params: HealthstateWhereUniqueInput
  ): Promise<Healthstate | null> {
    const result = await this.service.healthstate({
      where: params,
      select: {
        bloodPressureDia: true,
        bloodPressureSys: true,
        createdAt: true,
        feelings: true,
        id: true,
        pulse: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Healthstate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Healthstate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateHealthstate(
    @common.Param() params: HealthstateWhereUniqueInput,
    @common.Body() data: HealthstateUpdateInput
  ): Promise<Healthstate | null> {
    try {
      return await this.service.updateHealthstate({
        where: params,
        data: {
          ...data,

          userId: {
            connect: data.userId,
          },
        },
        select: {
          bloodPressureDia: true,
          bloodPressureSys: true,
          createdAt: true,
          feelings: true,
          id: true,
          pulse: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Healthstate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Healthstate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteHealthstate(
    @common.Param() params: HealthstateWhereUniqueInput
  ): Promise<Healthstate | null> {
    try {
      return await this.service.deleteHealthstate({
        where: params,
        select: {
          bloodPressureDia: true,
          bloodPressureSys: true,
          createdAt: true,
          feelings: true,
          id: true,
          pulse: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
