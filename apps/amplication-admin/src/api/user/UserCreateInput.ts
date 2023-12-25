import { HealthstateWhereUniqueInput } from "../healthstate/HealthstateWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  healthstates?: HealthstateWhereUniqueInput | null;
  isVerified?: boolean | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
