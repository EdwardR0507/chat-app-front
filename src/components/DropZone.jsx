import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { fileUpload } from "../helpers/fileUpload";
const DropZone = ({ handleEmit, setOpen }) => {
  const {
    auth: { uid },
  } = useContext(AuthContext);
  const {
    chatState: { activeChat },
  } = useContext(ChatContext);

  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop,
  });
  const images = files.map((file) => (
    <img
      key={file.name}
      src={file.preview}
      alt="image"
      className="rounded-lg max-w-full h-auto"
    />
  ));

  const handleSend = async () => {
    if (files.length > 0) {
      Swal.fire({
        title: "Uploading...",
        text: "Please wait",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const url = await fileUpload(files[0]);
      await handleEmit(uid, activeChat, url);
      Swal.close();
      setOpen(false);
    }
  };

  return (
    <>
      <div className="w-[350px] h-[380px] p-4">
        <div
          className={`border border-gray-300 rounded-lg w-full h-full flex flex-col justify-center items-center ${
            images.length == 0 && "cursor-pointer"
          }`}
          {...getRootProps()}
        >
          {images.length > 0 ? (
            <>
              <div className="w-60 h-auto">{images}</div>
              <div className="flex flex-row justify-evenly items-center w-full mt-8">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
                  onClick={() => setFiles([])}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                  onClick={handleSend}
                >
                  Acept
                </button>
              </div>
            </>
          ) : (
            <>
              <input {...getInputProps()} />
              <p className="text-center text-gray-600 text-sm font-semibold">
                Drag and drop some image here, or click to select one
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DropZone;
