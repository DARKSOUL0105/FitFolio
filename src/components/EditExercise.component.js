//import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";

const EditExercise = (props) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:5000/exercise/${id}`
        );
        const users = await axios.get("http://localhost:5000/user/");
        setUsername(response.data.username);
        setDescription(response.data.description);
        setDuration(response.data.duration);
        setDate(new Date(response.data.date));
        setUsers(users.data.map((user) => user.username));
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

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

    const NewExercise = {
      username,
      description,
      duration,
      date,
    };

    try {
      const update = await axios.post(
        `http://localhost:5000/exercise/update/${id}`,
        NewExercise
      );
      console.log(update.data);
      setMessage({ state: "true", msg: "Exercise Updated Successfully !" });
      setTimeout(() => {
        window.location = "/";
      }, 1000);
    } catch (err) {
      console.error(err);
      setMessage({ state: "false", msg: "OOps, Can't Update exercise!" });
    }
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(date);
  };
  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
      {getStatus()}
    </div>
  );
};

export default EditExercise;
