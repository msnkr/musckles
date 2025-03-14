import exercises from "../assets/data.json";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ShowExercise = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState([null]);

  useEffect(() => {
    setWorkout(exercises[id]);
  }, [id]);

  if (!workout) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="p-8">
        <Link to={"/"}>
          <button className="border px-4 py-2 rounded-lg">Go Home</button>
        </Link>
      </div>
      <div className="text-4xl text-center">{workout.name}</div>
      <div className="mt-12 space-y-6">
        {workout.images &&
          workout.images.map((image, index) => (
            <div key={index}>
              <img src={`../../public/exercise-images/${image}`} alt={""} />
            </div>
          ))}
      </div>
      <div className="capitalize m-4 space-y-2">
        <p>
          <span className="text-gray-400">Level: </span>
          {workout.level}
        </p>
        <p>
          <span className="text-gray-400">Equipment: </span>
          {workout.equipment}
        </p>
        <p>
          <span className="text-gray-400">Primary Muscle: </span>
          {workout.primaryMuscles}
        </p>
        <p>
          <span className="text-gray-400">Mechanic: </span>
          {workout.force}
        </p>
        <p>
          <span className="text-gray-400">Secondary Muscles: </span>
          {workout.secondaryMuscles &&
            workout.secondaryMuscles.map((secondary, index) => (
              <p key={index}>{secondary}</p>
            ))}
        </p>
        <div className="my-8">
          <p>{workout.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowExercise;
