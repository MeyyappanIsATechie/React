import { useEffect, useState } from "react";

const ApiTesting = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  console.log(users);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.firstName}</h2>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ApiTesting;
