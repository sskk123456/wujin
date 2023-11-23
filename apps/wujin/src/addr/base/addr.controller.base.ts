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
import { AddrService } from "../addr.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AddrCreateInput } from "./AddrCreateInput";
import { AddrWhereInput } from "./AddrWhereInput";
import { AddrWhereUniqueInput } from "./AddrWhereUniqueInput";
import { AddrFindManyArgs } from "./AddrFindManyArgs";
import { AddrUpdateInput } from "./AddrUpdateInput";
import { Addr } from "./Addr";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AddrControllerBase {
  constructor(
    protected readonly service: AddrService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Addr })
  @nestAccessControl.UseRoles({
    resource: "Addr",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: AddrCreateInput): Promise<Addr> {
    return await this.service.create({
      data: {
        ...data,

        userId: {
          connect: data.userId,
        },
      },
      select: {
        addrDetail: true,
        createdAt: true,
        district: true,
        fullname: true,
        id: true,
        tel: true,
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
  @swagger.ApiOkResponse({ type: [Addr] })
  @ApiNestedQuery(AddrFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Addr",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Addr[]> {
    const args = plainToClass(AddrFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        addrDetail: true,
        createdAt: true,
        district: true,
        fullname: true,
        id: true,
        tel: true,
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
  @swagger.ApiOkResponse({ type: Addr })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Addr",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: AddrWhereUniqueInput
  ): Promise<Addr | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        addrDetail: true,
        createdAt: true,
        district: true,
        fullname: true,
        id: true,
        tel: true,
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
  @swagger.ApiOkResponse({ type: Addr })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Addr",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: AddrWhereUniqueInput,
    @common.Body() data: AddrUpdateInput
  ): Promise<Addr | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          userId: {
            connect: data.userId,
          },
        },
        select: {
          addrDetail: true,
          createdAt: true,
          district: true,
          fullname: true,
          id: true,
          tel: true,
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
  @swagger.ApiOkResponse({ type: Addr })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Addr",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: AddrWhereUniqueInput
  ): Promise<Addr | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          addrDetail: true,
          createdAt: true,
          district: true,
          fullname: true,
          id: true,
          tel: true,
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