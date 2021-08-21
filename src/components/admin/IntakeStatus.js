import { useState, useEffect } from "react";
import axios from "axios";

export const IntakeStatus = (props) => {
  const [status, setStatus] = useState();
  const url = "https://momentum-lucidity.herokuapp.com/status/2/";

  useEffect(() => {
    axios.get(url).then((data) => console.log(data));
  }, []);
  return <p>Hello i am intake status</p>;
};
