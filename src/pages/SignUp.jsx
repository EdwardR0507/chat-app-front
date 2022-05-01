import { useForm } from "../hooks/useForm";
import InputText from "../ui/InputText";

const SignUp = () => {
  const [formValues, handleInputChange, reset] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <article className=" min-h-screen flex justify-center items-center">
      <div className="bg-sky-200 w-[90vw] h-[90vh] sm:w-[70vw] sm:h-[80vh]  rounded-lg border-2 border-slate-300 shadow-inner flex justify-center items-center">
        <div className="w-4/5 h-4/5">
          <h2 className="font-extrabold text-2xl">Create Account</h2>
          <p className="font-semibold mt-2">
            Create a free acount to access the chat
          </p>
          <form
            className="h-[90%] flex flex-col justify-evenly"
            onSubmit={handleSubmit}
          >
            <InputText
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
            <InputText
              label="Username"
              name="username"
              type="text"
              value={username}
              onChange={handleInputChange}
              placeholder="Username"
              required
            />
            <InputText
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
            <button
              type="submit"
              className="bg-[#397A96] w-full h-12 mt-2 flex justify-center items-center rounded-2xl shadow-inner text-white 
            hover:bg-[#2F5A70] hover:text-white focus:outline-none"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default SignUp;
