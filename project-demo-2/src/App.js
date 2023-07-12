import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (name, age, id) => {
    setUserList((prevState) => {
      return [...prevState, { name: name, age: age, id: id }];
    });
  };

  return (
    <>
      <AddUser onAddedUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;
