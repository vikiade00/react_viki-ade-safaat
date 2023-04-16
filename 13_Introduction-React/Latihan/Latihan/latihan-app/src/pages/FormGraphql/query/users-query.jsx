import { gql } from "@apollo/client";

// Menampilkan Data Users
export const GET_USERS = gql`
  query users {
    users(order_by: { timeStamp: asc }) {
      nim
      lastName
      firstName
      address
      uuid
    }
  }
`;

// Edit data
export const UPDATE_USER = gql`
  mutation MyMutation($pk_columns: users_pk_columns_input!, $_set: users_set_input!) {
    update_users_by_pk(pk_columns: $pk_columns, _set: $_set) {
      uuid
    }
  }
`;

// Create Data Users
export const ADD_USER = gql`
  mutation MyMutation($object: users_insert_input = {}) {
    insert_users_one(object: $object) {
      uuid
    }
  }
`;

// Delete Users
export const DELETE_USER = gql`
  mutation MyMutation($uuid: uuid!) {
    delete_users_by_pk(uuid: $uuid) {
      uuid
    }
  }
`;
