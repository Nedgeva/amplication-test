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
import { HealthstateWhereInput } from "./HealthstateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HealthstateOrderByInput } from "./HealthstateOrderByInput";

@ArgsType()
class HealthstateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HealthstateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HealthstateWhereInput, { nullable: true })
  @Type(() => HealthstateWhereInput)
  where?: HealthstateWhereInput;

  @ApiProperty({
    required: false,
    type: [HealthstateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HealthstateOrderByInput], { nullable: true })
  @Type(() => HealthstateOrderByInput)
  orderBy?: Array<HealthstateOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HealthstateFindManyArgs as HealthstateFindManyArgs };
