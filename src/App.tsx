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

      <div className="relative">
        <input type="radio"
          name="user-type"
          value="Admin"
          id="admin"
          checked={userType === "Admin"}
          onChange={handleOption}
          className="peer mr-3 absolute left-4 top-1/2 -translate-y-1/2"
        />
        <label
          className="block py-2 px-4 pl-10 peer-checked:bg-blue-100 rounded-md"
          htmlFor="admin"
        >
          Admin
        </label>
      </div>

      <div className="relative">
        <input type="radio"
          name="user-type"
          value="Manager"
          id="manager"
          checked={userType === "Manager"}
          onChange={handleOption}
          className="peer mr-3 absolute left-4 top-1/2 -translate-y-1/2"
        />
        <label 
          className="block py-2 px-4 pl-10 peer-checked:bg-blue-100 rounded-md"
          htmlFor="manager"
        >
          Manager
        </label>

      </div>
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
