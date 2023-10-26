function App() {
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
      <ul>
        <li>User 1</li>
        <li>User 2</li>
      </ul>

      <hr />
    </div>
  );
}

export default App;
