import { SortOrder } from "../../util/SortOrder";

export type HealthstateOrderByInput = {
  bloodPressureDia?: SortOrder;
  bloodPressureSys?: SortOrder;
  createdAt?: SortOrder;
  feelings?: SortOrder;
  id?: SortOrder;
  pulse?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
