import logo from "./logo.svg";
import "./App.css";
import fetchUsers from "./services/fetchUsers";
import { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "./constants";
import fetchUser from "./services/fetchUser";
import Users from "./components/Users";
import User from "./components/User";
import updateUser from "./services/updateUser";

function App() {
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);

  const onFetchUser = useCallback(async (id) => {
    const user = await fetchUser(id);
    setUser(user);
    setUsers(null);
  }, []);

  const onUpdateUser = useCallback(async (id, data) => {
    const update = await updateUser(id, data);
    console.log(update);
  }, []);

  useEffect(() => {
    (async () => {
      const users = await fetchUsers();
      setUsers(users.User_Details);
      setUser(null);
    })();
  }, []);
  return (
    <div className="App">
      {users !== null && !user ? (
        <Users users={users} onFetchUser={onFetchUser} />
      ) : (
        user !== null &&
        !users && <User user={user} onUpdateUser={onUpdateUser} />
      )}
    </div>
  );
}

export default App;
