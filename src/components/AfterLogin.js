import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const AfterLogin = () => {
  const history = useHistory();
  const [login, setLogin] = useState(false);

  const SwitchMode = (prev) => {
    setLogin((prev) => !prev);
  };
  return (
    <>
      <div>
        <h1 style={{ color: "white" }}>Here We Go</h1>
      </div>{" "}
      <p style={{ color: "white" }}>Click on blue Dot to login page</p>
      <Button onClick={SwitchMode}>
        {login ? history.replace("/loginDetails") : ""}
      </Button>
    </>
  );
};
export default AfterLogin;
