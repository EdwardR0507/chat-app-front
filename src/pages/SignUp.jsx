import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import InputText from "../ui/InputText";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useContext(AuthContext);
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  const isComplete = () => {
    return name.length > 0 && email.length > 0 && password.length > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signUp(name, email, password);
    if (!response.ok) {
      alert(response.msg);
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <article className=" min-h-screen flex justify-center items-center text-gray-800">
      <div className="bg-indigo-200 w-[90vw] h-[90vh] sm:w-[70vw] sm:h-[80vh]  rounded-lg border-2 border-slate-300 shadow-inner flex justify-center items-center">
        <div className="w-4/5 h-4/5">
          <h2 className="font-extrabold text-2xl">Create Account</h2>
          <p className="font-semibold mt-2">
            Create a free account to access the chat
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
              label="Name"
              name="name"
              type="text"
              value={name}
              onChange={handleInputChange}
              placeholder="Enter yout name"
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
            hover:bg-[#2F5A70] hover:text-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isComplete()}
            >
              Register
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <Link className="text-indigo-500 underline" to="/auth/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </article>
  );
};

export default SignUp;
