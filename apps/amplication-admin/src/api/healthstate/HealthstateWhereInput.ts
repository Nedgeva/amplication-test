import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HealthstateWhereInput = {
  bloodPressureDia?: IntFilter;
  bloodPressureSys?: IntFilter;
  feelings?: StringNullableFilter;
  id?: StringFilter;
  pulse?: IntFilter;
  userId?: UserWhereUniqueInput;
};
