import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HealthstateWhereUniqueInput } from "../healthstate/HealthstateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  healthstates?: HealthstateWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
