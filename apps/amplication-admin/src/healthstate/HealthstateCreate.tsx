import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const HealthstateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="blood_pressure_dia"
          source="bloodPressureDia"
        />
        <NumberInput
          step={1}
          label="blood_pressure_sys"
          source="bloodPressureSys"
        />
        <TextInput label="feelings" multiline source="feelings" />
        <NumberInput step={1} label="pulse" source="pulse" />
        <ReferenceInput source="userId.id" reference="User" label="user_id">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
