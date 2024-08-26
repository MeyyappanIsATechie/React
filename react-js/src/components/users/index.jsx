import { useEffect, useState } from "react";
import "./index.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchAllUsers() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    } finally {
      setLoading(false);
    }
  }

  //   useEffect(() => {
  //     fetchAllUsers();
  //   }, []);

  const handleClick = () => {
    setUsers([]); // Reset users when fetching new ones
    setLoading(true);
    fetchAllUsers();
  };

  //   console.log(users);

  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount) : 0;
  });

  // Update localStorage whenever the count changes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <h1>All User Lists</h1>
      <button onClick={handleClick}>Get users</button>
      {loading ? ( // Display loader while loading
        <div className="loader"></div>
      ) : users && users.length > 0 ? ( // Check if users exist and have data
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>{user.firstName}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No users found</h3>
      )}

      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Users;
