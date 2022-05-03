const Avatar = () => {
  return (
    <article className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
      <div className="h-20 w-20 rounded-full border overflow-hidden">
        <img
          src="https://avatars3.githubusercontent.com/u/2763884?s=128"
          alt="Avatar"
          className="h-full w-full"
        />
      </div>
      <p className="text-sm font-semibold mt-2">Edward Ramos</p>
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
    </article>
  );
};

export default Avatar;
