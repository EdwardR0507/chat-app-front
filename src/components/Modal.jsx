const Modal = ({ children, open, setOpen }) => {
  return (
    <>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 p-10 flex items-center justify-center">
          <div className="min-w-[400px] min-h-[400px] relative rounded-md shadow-md p-5 bg-slate-300">
            <button
              className="absolute top-4 right-5 border-0 bg-transparent cursor-pointer ease-linear"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>

            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
