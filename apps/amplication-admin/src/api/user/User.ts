import { Healthstate } from "../healthstate/Healthstate";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  healthstates?: Healthstate | null;
  id: string;
  isVerified: boolean | null;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
