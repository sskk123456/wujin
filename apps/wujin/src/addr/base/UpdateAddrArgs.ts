/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddrWhereUniqueInput } from "./AddrWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AddrUpdateInput } from "./AddrUpdateInput";

@ArgsType()
class UpdateAddrArgs {
  @ApiProperty({
    required: true,
    type: () => AddrWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddrWhereUniqueInput)
  @Field(() => AddrWhereUniqueInput, { nullable: false })
  where!: AddrWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AddrUpdateInput,
  })
  @ValidateNested()
  @Type(() => AddrUpdateInput)
  @Field(() => AddrUpdateInput, { nullable: false })
  data!: AddrUpdateInput;
}

export { UpdateAddrArgs as UpdateAddrArgs };
