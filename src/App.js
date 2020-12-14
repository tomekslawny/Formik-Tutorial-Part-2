import React from "react";
import "./App.css";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="App">
      <LoginForm />
      <hr />
      <RegistrationForm />
      <hr />
      <FormikContainer />
    </div>
  );
}

export default App;
