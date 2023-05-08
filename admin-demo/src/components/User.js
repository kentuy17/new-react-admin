import React from "react";
import {
  List,
  Create,
  Edit,
  SimpleForm,
  Datagrid,
  EmailField,
  TextField,
  TextInput,
  DeleteButton,
  NumberInput,
} from "react-admin";

export const UserList = () => {
  return (
    <List>
      <Datagrid
        rowClick="edit"
        sx={{
          ".RaDatagrid-rowEven": {
            backgroundColor: "lavender",
          },
          ".RaDatagrid-headerCell": {
            backgroundColor: "MistyRose",
          },
        }}
      >
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="phone" />
        <TextField source="company" />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export const UserCreate = () => {
  return (
    <Create title="Create User">
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="company" />
      </SimpleForm>
    </Create>
  );
};
export const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="company" />
      </SimpleForm>
    </Edit>
  );
};
