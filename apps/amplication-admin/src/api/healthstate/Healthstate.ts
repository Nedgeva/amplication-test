import { User } from "../user/User";

export type Healthstate = {
  bloodPressureDia: number;
  bloodPressureSys: number;
  createdAt: Date;
  feelings: string | null;
  id: string;
  pulse: number;
  updatedAt: Date;
  userId?: User;
};
