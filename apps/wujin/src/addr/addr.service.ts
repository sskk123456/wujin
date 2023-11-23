import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AddrServiceBase } from "./base/addr.service.base";

@Injectable()
export class AddrService extends AddrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
