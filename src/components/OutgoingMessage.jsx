import { hourMonth } from "../helpers/dates";

const OutgoingMessage = ({ msg }) => {
  const { createdAt, message } = msg;
  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg">
      <div className="flex flex-col items-end">
        <div className="flex items-center justify-start flex-row-reverse">
          <img
            className="flex items-center justify-center h-8 w-8 rounded-full"
            src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg"
            alt="User"
          />
          <div className="mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
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

export default OutgoingMessage;
