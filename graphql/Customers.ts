import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";
import { ListZellerCustomers } from "../graphql/queries";

const API_URL = process.env.REACT_APP_GRAPHQL_ENDPOINT || "";

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    'X-API-KEY': `${process.env.REACT_APP_GRAPHQL_API_KEY}`
  }
});

export function useGetCustomers() {
  return useQuery("getCustomers", async () => {
    const req = await graphQLClient.request(ListZellerCustomers);
    return req;
  });
}