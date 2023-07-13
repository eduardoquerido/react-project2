import React, { useState, useRef } from "react";
import Card from "../../UI/Card/Card";
import classes from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import Wrapper from "../../Helpers/Wraapper";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name/age (non-empty values).",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    // Lifting new user data
    props.onAddedUser(
      enteredName,
      enteredUserAge,
      Math.floor(Math.random() * 100).toString()
    );
    // Use ref's only when you want just to read some values instead of manipulate it
    // We shouldn't manipulate the DOM like the line bellow
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          {/* uncontrolled components because we don't let React deal with these values */}
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
