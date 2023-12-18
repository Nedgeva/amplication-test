import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HealthstateUpdateInput = {
  bloodPressureDia?: number;
  bloodPressureSys?: number;
  feelings?: string | null;
  pulse?: number;
  userId?: UserWhereUniqueInput;
};
