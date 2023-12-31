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
import { HealthstateWhereUniqueInput } from "./HealthstateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { HealthstateUpdateInput } from "./HealthstateUpdateInput";

@ArgsType()
class UpdateHealthstateArgs {
  @ApiProperty({
    required: true,
    type: () => HealthstateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HealthstateWhereUniqueInput)
  @Field(() => HealthstateWhereUniqueInput, { nullable: false })
  where!: HealthstateWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => HealthstateUpdateInput,
  })
  @ValidateNested()
  @Type(() => HealthstateUpdateInput)
  @Field(() => HealthstateUpdateInput, { nullable: false })
  data!: HealthstateUpdateInput;
}

export { UpdateHealthstateArgs as UpdateHealthstateArgs };
