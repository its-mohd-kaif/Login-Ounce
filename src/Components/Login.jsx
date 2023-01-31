import React from "react";
import { Card } from "@cedcommerce/ounce-ui";
import { TextField } from "@cedcommerce/ounce-ui";
import { Button } from "@cedcommerce/ounce-ui";
import { FlexLayout } from "@cedcommerce/ounce-ui";
import { useState } from "react";
import { Alert } from "@cedcommerce/ounce-ui";
function Login() {
  // UseState For Input Fields
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //   UseState For Alert Message
  const [alert, setAlert] = useState("");
  //   Email Handler
  const emailHandler = (e) => {
    setEmail(e);
  };
  //   Password Handler
  const passHandler = (e) => {
    setPass(e);
  };
  //   Login Handler
  const loginHandler = () => {
    // Check Validation
    if (email === "") {
      setAlert("Email Field Can Not Be Empty");
      document.getElementById("email").focus();
    } else if (pass === "") {
      setAlert("Password Field Can Not Be Empty");
      document.getElementById("pass").focus();
    } else {
      setAlert("Login Successfully");
      setEmail("");
      setPass("");
    }
  };
  //   Alert Close Handler
  const alertHandler = () => {
    setAlert("");
  };
  return (
    <center>
      <div style={{ width: "50%", textAlign: "left", margin: "3em" }}>
        <Card>
          <h1 style={{ textAlign: "center" }}>Login Form</h1>
          <TextField
            onChange={emailHandler}
            name="Email"
            id="email"
            type="email"
            placeHolder="Enter Email Here..."
            value={email}
          />
          <br></br>
          <TextField
            onChange={passHandler}
            name="Password"
            id="pass"
            value={pass}
            strength
            type="password"
            placeHolder="Enter Password Here..."
          />
          <br></br>
          <FlexLayout direction="vertical" spacing="extraLoose">
            <Button onClick={loginHandler} content="Login" length="fullBtn" />
          </FlexLayout>
          <br></br>
          <div id="alert">
            {alert !== "" ? (
              <Alert
                onClose={alertHandler}
                type={`${
                  alert === "Login Successfully" ? "success" : "warning"
                }`}
              >
                {alert}
              </Alert>
            ) : null}
          </div>
        </Card>
      </div>
    </center>
  );
}

export default Login;
