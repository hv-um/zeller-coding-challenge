import { gql } from "graphql-request";

export const ListZellerCustomers = gql`
  query ListZellerCustomers {
    listZellerCustomers {
      items {
        email
        id
        name
        role
      }
    }
  }
`
