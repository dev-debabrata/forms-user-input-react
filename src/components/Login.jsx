import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";
import { Link } from "react-router-dom";


export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] max-w-[640px] my-12 mx-auto p-8 bg-stone-800 rounded-lg shadow-[0_0_16px_1px_rgba(0,0,0,0.5)]"
    >
      <h2 className="text-2xl font-bold text-[#d9e2f1] mb-6 text-center">
        Login
      </h2>

      <div className="flex justify-center gap-8">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password!"}
        />
      </div>

      <div className="flex justify-end gap-4 mt-4 mr-6">
        <button
          type="button"
          className="px-4 py-2 text-base rounded bg-transparent text-stone-300 hover:text-stone-500 focus:text-stone-500 cursor-pointer"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-base rounded border-none bg-stone-600 text-stone-300 hover:bg-stone-700 focus:bg-stone-700 cursor-pointer"
        >
          Login
        </button>
      </div>
      <div className='flex justify-center mt-4'>
        <p className='text-base text-stone-400'>
          Don't have an account?{" "}
          <Link to="/signup" className='text-stone-200 hover:underline'>
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
}
