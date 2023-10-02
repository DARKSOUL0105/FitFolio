//import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

const Create_user = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("null");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const getStatus = () => {
    if (message.state === "true") {
      return (
        <div className="alert alert-success mb-4 mt-3 ">{message.msg}</div>
      );
    } else if (message.state === "false") {
      return <div className="alert alert-danger mb-4 mt-3">{message.msg}</div>;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
    };
    console.log(user);

    try {
      const response = await axios.post("http://localhost:5000/user/add", user);
      console.log(response.data);
      setMessage({ state: "true", msg: "User Created Successfully" });
      setTimeout(() => {
        window.location = "/";
      }, 1000);
    } catch (err) {
      console.log("axios error:" + err);
      setMessage({ state: "false", msg: "Can't Create New user" });
    }
  };

  return (
    <div>
      <h3>Create new User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            required
            className="form-control mb-3 "
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary "
          ></input>
        </div>
      </form>
      {getStatus()}
    </div>
  );
};

export default Create_user;
