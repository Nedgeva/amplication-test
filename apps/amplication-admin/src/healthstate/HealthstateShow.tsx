import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const HealthstateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="blood_pressure_dia" source="bloodPressureDia" />
        <TextField label="blood_pressure_sys" source="bloodPressureSys" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="feelings" source="feelings" />
        <TextField label="ID" source="id" />
        <TextField label="pulse" source="pulse" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user_id" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
