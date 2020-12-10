import React, { useState, useEffect } from "react";
import Spinner from "./shared/Spinner";

const FetchUsers = () => {
  const [users, setUsers] = useState(null);

  async function fetchUsers() {
    try {
      let response = await fetch("http://jsonplaceholder.typicode.com/users");
      let results = await response.json();

    //   console.log(results);
      setUsers(results);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!users) {
    return <Spinner />;
  }

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FetchUsers;
