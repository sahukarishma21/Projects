import { useEffect, useState } from "react";
import axios from "axios";
import './db.json'

function GetTweets() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/db.json")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
      console.log(users)
  }, []);

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            #{user.id}: {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetTweets;