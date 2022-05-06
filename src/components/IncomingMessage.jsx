import { hourMonth } from "../helpers/dates";

const IncomingMessage = ({ msg }) => {
  const { createdAt, message } = msg;
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-col">
        <div className=" flex flex-row items-center">
          <img
            className="flex items-center justify-center h-8 w-8 rounded-full"
            src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg"
            alt="User"
          />
          <div className="ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
            <p>{message}</p>
          </div>
        </div>
        <span className=" mt-1 text-sm text-gray-500">
          {hourMonth(createdAt)}
        </span>
      </div>
    </div>
  );
};

export default IncomingMessage;
