import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import classes from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }
    // Lifting new user data
    props.onAddedUser(
      enteredUsername,
      enteredAge,
      Math.floor(Math.random() * 100).toString()
    );
    setEnteredAge("");
    setEnteredUsername("");
  };
  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={enteredUsername}
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
