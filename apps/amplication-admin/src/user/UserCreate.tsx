import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { HealthstateTitle } from "../healthstate/HealthstateTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <ReferenceInput
          source="healthstates.id"
          reference="Healthstate"
          label="healthstates"
        >
          <SelectInput optionText={HealthstateTitle} />
        </ReferenceInput>
        <BooleanInput label="IsVerified" source="isVerified" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
