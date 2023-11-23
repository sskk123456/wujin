/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AddrWhereUniqueInput } from "../../addr/base/AddrWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AddrUpdateManyWithoutUsersInput {
  @Field(() => [AddrWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AddrWhereUniqueInput],
  })
  connect?: Array<AddrWhereUniqueInput>;

  @Field(() => [AddrWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AddrWhereUniqueInput],
  })
  disconnect?: Array<AddrWhereUniqueInput>;

  @Field(() => [AddrWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AddrWhereUniqueInput],
  })
  set?: Array<AddrWhereUniqueInput>;
}

export { AddrUpdateManyWithoutUsersInput as AddrUpdateManyWithoutUsersInput };