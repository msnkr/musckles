import { Link } from "react-router-dom";

const RandomExercise = ({ arr }) => {
  return (
    <div>
      {arr.map((exercise) => {
        return (
          <div key={exercise.id} className="my-8">
            <div className="my-2">
              <img
                src={`../../public/exercise-images/${exercise.images[1]}`}
                alt="exercise-image"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="space-y-2 capitalize px-4">
              <Link to={`${exercise.id - 1}`}>
                <p className="font-semibold my-2">{exercise.name}</p>
              </Link>
              <p>
                <span className="text-gray-400">Level: </span>
                {exercise.level}
              </p>
              <p>
                <span className="text-gray-400">Equipment: </span>
                {exercise.equipment}
              </p>
              <p>
                <span className="text-gray-400">Primary Muscle: </span>
                {exercise.primaryMuscles}
              </p>
              <p>
                <span className="text-gray-400">Mechanic: </span>
                {exercise.force}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RandomExercise;
