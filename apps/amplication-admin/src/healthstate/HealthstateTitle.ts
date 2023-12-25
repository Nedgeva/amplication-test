import { Healthstate as THealthstate } from "../api/healthstate/Healthstate";

export const HEALTHSTATE_TITLE_FIELD = "id";

export const HealthstateTitle = (record: THealthstate): string => {
  return record.id?.toString() || String(record.id);
};
