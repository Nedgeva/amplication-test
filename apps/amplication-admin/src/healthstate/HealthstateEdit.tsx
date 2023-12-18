import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const HealthstateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
