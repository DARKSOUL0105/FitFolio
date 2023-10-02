import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={`/edit/${props.exercise._id}`}>edit</Link> |{" "}
      <Link
        to="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
          toast.success("Exercise deleted successfully!"); // Display a success toast
        }}
      >
        delete
      </Link>
    </td>
  </tr>
);

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get("http://localhost:5000/exercise/");
        setExercises(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExercises();
  }, []);

  const deleteExercise = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/exercise/delete/${id}`);
      setExercises((prevExercises) =>
        prevExercises.filter((el) => el._id !== id)
      );
      console.log("Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const exerciseList = exercises.map((currentExercise) => (
    <Exercise
      exercise={currentExercise}
      deleteExercise={deleteExercise}
      key={currentExercise._id}
    />
  ));

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList}</tbody>
      </table>
    </div>
  );
};

export default ExercisesList;
