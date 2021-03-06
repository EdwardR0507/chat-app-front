import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import InputCheck from "../ui/InputCheck";
import InputText from "../ui/InputText";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formValues, handleInputChange, reset] = useForm({
    email: "",
    password: "",
    remember: false,
  });
  const { email, password, remember } = formValues;

  useEffect(() => {
    const rememberData = localStorage.getItem("remember");
    if (rememberData) {
      const parsedRemember = JSON.parse(rememberData);
      reset(parsedRemember);
    }
  }, []);

  const toogleCheck = () => {
    reset({
      ...formValues,
      remember: !remember,
    });
  };

  const isComplete = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    remember
      ? window.localStorage.setItem("remember", JSON.stringify(formValues))
      : window.localStorage.removeItem("remember");
    const response = await login(email, password);
    if (!response.ok) {
      alert(response.msg);
    } else {
      navigate("/");
    }
  };
  return (
    <article className=" min-h-screen flex justify-center items-center text-gray-800">
      <div className="bg-indigo-200 w-[90vw] h-[70vh] sm:w-[80vw] sm:h-[70vh] md:w-[70vw] rounded-lg border-2 border-slate-300 shadow-inner flex justify-center items-center">
        <div className="w-4/5 h-4/5">
          <h2 className="font-extrabold text-2xl">Login </h2>
          <p className="font-semibold mt-2">Login to chat with friends</p>
          <form
            className="h-[80%] flex flex-col justify-evenly"
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
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
            <InputCheck
              name="remember"
              label="Remember me"
              checked={remember}
              onChange={toogleCheck}
            />
            <button
              type="submit"
              className="bg-[#397A96] w-full h-12 mt-2 flex justify-center items-center rounded-2xl shadow-inner text-white 
            hover:bg-[#2F5A70] hover:text-white focus:outline-none 
            disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isComplete()}
            >
              Login
            </button>

            <p className="text-center">
              Don't have an account?{" "}
              <Link className="text-indigo-500 underline" to="/auth/signup">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Login;
