import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HealthstateCreateInput = {
  bloodPressureDia: number;
  bloodPressureSys: number;
  feelings?: string | null;
  pulse: number;
  userId: UserWhereUniqueInput;
};
