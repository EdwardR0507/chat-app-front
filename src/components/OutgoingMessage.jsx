const OutgoingMessage = () => {
  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <img
          className="flex items-center justify-center h-8 w-8 rounded-full"
          src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
          alt="James Bhatta"
        />
        <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
          <div>I'm ok what about you?</div>
        </div>
      </div>
    </div>
  );
};

export default OutgoingMessage;
