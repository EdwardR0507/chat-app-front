const Inbox = () => {
  return (
    <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
      <img
        className="flex items-center justify-center h-8 w-8 rounded-full"
        src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
        alt="James Bhatta"
      />

      <p className="ml-2 text-sm font-semibold">James Bhatta</p>
      <span className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
        2
      </span>
    </button>
  );
};

export default Inbox;
