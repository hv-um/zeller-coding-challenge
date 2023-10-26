import { UserListItem } from "./UserListItem";
import { useGetCustomers } from "./graphql/Customers";

function App() {
  const { data, error, isLoading, isSuccess }: any = useGetCustomers();

  if (error) return <h2>Error loading API</h2>;

  return (
    <div className="App">
      <h2>User Types</h2>
      <label>
        <input type="radio"
          name="user-type"
          value="Admin"
        />
        Admin
      </label>
      <label>
        <input type="radio"
          name="user-type"
          value="Manager"
        />
        Manager
      </label>
      <hr />

      <h2>Users</h2>
      {isLoading && <p>Loading users...</p>}

      <ul>
        {isSuccess &&
          data.listZellerCustomers.items
            .map((customer) => <UserListItem key={customer.id} user={customer} />)
        }
      </ul>

      <hr />
    </div>
  );
}

export default App;
