import { HealthstateWhereInput } from "./HealthstateWhereInput";
import { HealthstateOrderByInput } from "./HealthstateOrderByInput";

export type HealthstateFindManyArgs = {
  where?: HealthstateWhereInput;
  orderBy?: Array<HealthstateOrderByInput>;
  skip?: number;
  take?: number;
};
