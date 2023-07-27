import { useState } from "react";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    valueInputBlur: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueInputBlur: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.trim().includes("@"));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // do not send the http request to the browser and so don't reload the page

    if (!nameIsValid) {
      return;
    }

    if (!emailIsValid) {
      return;
    }

    resetName();
    resetEmail();
  };
  console.log(formIsValid);

  // if you only interested in reading the value once we should use useRef
  // if we want instant validation we should use useState. Also if we want to reset the enteredName

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-mail</label>
        <input
          value={enteredEmail}
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
