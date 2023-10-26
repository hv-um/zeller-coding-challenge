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
    <div className="container mx-auto p-2">
      <h2 className="text-lg font-bold mb-4">User Types</h2>
      <label className="block p-4 group">
        <input type="radio"
          name="user-type"
          value="Admin"
          checked={userType === "Admin"}
          onChange={handleOption}
          className="mr-3 group-hover:text-red"
        />
        Admin
      </label>
      <label className="block p-2">
        <input type="radio"
          name="user-type"
          value="Manager"
          checked={userType === "Manager"}
          onChange={handleOption}
          className="mr-3"
        />
        Manager
      </label>
      <hr className="my-4" />

      <h2 className="text-lg font-bold mb-4">{userType} Users</h2>
      {isLoading && <p>Loading users...</p>}

      <ul>
        {isSuccess &&
          data.listZellerCustomers.items
            .filter((item) => item.role.toLowerCase() === userType.toLowerCase())
            .map((customer) => <UserListItem key={customer.id} user={customer} />)
        }
      </ul>

      <hr className="my-4" />
    </div>
  );
}

export default App;
