import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Avatar = () => {
  const {
    auth: { name },
    logout,
  } = useContext(AuthContext);
  return (
    <article className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
      <div className="h-20 w-20 rounded-full border overflow-hidden">
        <img
          src="https://avatars.githubusercontent.com/u/57167533?s=400&u=63b8b3b8917028d36108926cbdfde2213e7bf577&v=4"
          alt="Avatar"
          className="h-full w-full"
        />
      </div>
      <p className="text-sm font-semibold mt-2">{name}</p>
      <span className="text-sm tracking-wide flex items-center space-x-1">
        <svg
          className="h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            fill="green"
            stroke="none"
          ></circle>
        </svg>
        <span className="text-gray-600">Online</span>
      </span>
      <button
        className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 mt-2 text-sm bg-white text-red-500 focus:outline-none"
        onClick={logout}
      >
        Log Out
      </button>
    </article>
  );
};

export default Avatar;
