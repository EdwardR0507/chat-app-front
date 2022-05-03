const IncomingMessage = () => {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <img
          className="flex items-center justify-center h-8 w-8 rounded-full"
          src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
          alt="James Bhatta"
        />
        <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          <div>Hey How are you today?</div>
        </div>
      </div>
    </div>
  );
};

export default IncomingMessage;
