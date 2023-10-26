import { useState } from "react";
import { UserListItem } from "./UserListItem";
import { useGetCustomers } from "./graphql/Customers";

function App() {
  const { data, error, isLoading, isSuccess }: any = useGetCustomers();
  const [userType, setUserType] = useState("Admin");

  const handleOption = (event) => {
    if (event) setUserType(event.target.value);
  }

  if (error) return <h2>Error loading API</h2>;

  return (
    <div className="App">
      <h2>User Types</h2>
      <label>
        <input type="radio"
          name="user-type"
          value="Admin"
          checked={userType === "Admin"}
          onChange={handleOption}
        />
        Admin
      </label>
      <label>
        <input type="radio"
          name="user-type"
          value="Manager"
          checked={userType === "Manager"}
          onChange={handleOption}
        />
        Manager
      </label>
      <hr />

      <h2>Users</h2>
      {isLoading && <p>Loading users...</p>}

      <ul>
        {isSuccess &&
          data.listZellerCustomers.items
            .filter((item) => item.role.toLowerCase() === userType.toLowerCase())
            .map((customer) => <UserListItem key={customer.id} user={customer} />)
        }
      </ul>

      <hr />
    </div>
  );
}

export default App;
