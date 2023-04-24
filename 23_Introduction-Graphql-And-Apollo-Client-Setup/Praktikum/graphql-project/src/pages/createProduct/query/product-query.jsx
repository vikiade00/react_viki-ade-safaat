import { gql } from "@apollo/client";

// MENAMPILKAN DATA
export const GET_PRODUCT = gql`
  query product {
    product(order_by: { timeStamp: asc }) {
      productCode
      productCategory
      productFreshness
      productName
      productPrice
      uuid
    }
  }
`;

// ADD DATA
export const ADD_PRODUCT = gql`
  mutation MyMutation($object: product_insert_input = {}) {
    insert_product_one(object: $object) {
      uuid
    }
  }
`;

// UPDATE DATA
export const UPDATE_PRODUCT = gql`
  mutation MyMutation($pk_columns: product_pk_columns_input!, $_set: product_set_input!) {
    update_product_by_pk(pk_columns: $pk_columns, _set: $_set) {
      uuid
    }
  }
`;

// DELETE DATA
export const DELETE_PRODUCT = gql`
  mutation MyMutation($uuid: uuid!) {
    delete_product_by_pk(uuid: $uuid) {
      uuid
    }
  }
`;
