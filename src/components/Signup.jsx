import { useState } from "react";

export default function Signup() {
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel;

    if (data.password !== data["confirm-password"]) {
      setPasswordsAreNotEqual(true);
      return;
    }

    setPasswordsAreNotEqual(false);
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] max-w-[640px] my-12 mx-auto p-8 bg-stone-800  rounded-lg shadow-[0_0_16px_1px_rgba(0,0,0,0.5)]"
    >
      <h2 className="text-2xl font-bold text-[#d9e2f1] mb-2 text-center">
        Welcome on board!
      </h2>
      <p className="text-stone-300 mb-6 text-center">
        We just need a little bit of data from you to get you started 🚀
      </p>

      {/* Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-[0.8rem] mb-1 text-stone-400 uppercase font-bold"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="block w-full max-w-[20rem] p-2 text-base rounded border border-stone-400 bg-stone-600 text-stone-200"
        />
      </div>

      {/* Password + Confirm Password */}
      <div className="flex flex-wrap justify-start gap-4">
        <div className="w-full max-w-[250px] mb-4">
          <label
            htmlFor="password"
            className="block text-[0.8rem] mb-1 text-stone-400 uppercase font-bold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            required
            minLength={6}
            className="block w-full p-2 text-base rounded border border-stone-400 bg-stone-600 text-stone-200"
          />
        </div>

        <div className="w-full max-w-[250px] mb-4">
          <label
            htmlFor="confirm-password"
            className="block text-[0.8rem] mb-1 text-stone-400 uppercase font-bold"
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
            className={`block w-full p-2 text-base rounded border bg-stone-600 text-stone-200 ${passwordsAreNotEqual
              ? "border-[#ff7b7b] focus:ring-[#ff7b7b]"
              : "border-[#758a8a] focus:ring-[#758a8a]"
              }`}
          />
          {passwordsAreNotEqual && (
            <p className="text-[#ffca99] text-[0.8rem] mt-2">
              Passwords must match.
            </p>
          )}
        </div>
      </div>

      <hr className="border-[#758a8a] my-6" />

      {/* First + Last Name */}
      <div className="flex flex-wrap justify-start gap-4">
        <div className="w-full max-w-[250px] mb-4">
          <label
            htmlFor="first-name"
            className="block text-[0.8rem] mb-1 text-stone-400 uppercase font-bold"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            required
            className="block w-full p-2 text-base rounded border border-stone-400 bg-stone-600 text-stone-200"
          />
        </div>

        <div className="w-full max-w-[250px] mb-4">
          <label
            htmlFor="last-name"
            className="block text-[0.8rem] mb-1 text-stone-400 uppercase font-bold"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            required
            className="block w-full p-2 text-base rounded border border-stone-400 bg-stone-600 text-stone-200"
          />
        </div>
      </div>

      {/* Role */}
      <div className="mb-4">
        <label
          htmlFor="role"
          className="block text-[0.8rem] mb-1 text-stone-400 uppercase font-bold"
        >
          What best describes your role?
        </label>
        <select
          id="role"
          name="role"
          required
          className="block w-full max-w-[320px] p-2 text-base rounded border border-stone-400 bg-stone-600 text-stone-200"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Fieldset: Acquisition */}
      <fieldset className="border border-stone-400 rounded-lg p-4 mb-4">
        <legend className=" text-stone-400 uppercase font-bold text-sm">
          How did you find us?
        </legend>

        <div className="flex flex-col gap-2 mt-2">
          <label className="flex items-center gap-2 text-stone-200">
            <input
              type="checkbox"
              id="google"
              name="acquisition"
              value="google"
              className="w-4 h-4 accent-stone-600"
            />
            Google
          </label>

          <label className="flex items-center gap-2 text-stone-200">
            <input
              type="checkbox"
              id="friend"
              name="acquisition"
              value="friend"
              className="w-4 h-4 accent-stone-600"
            />
            Referred by friend
          </label>

          <label className="flex items-center gap-2 text-stone-200">
            <input
              type="checkbox"
              id="other"
              name="acquisition"
              value="other"
              className="w-4 h-4 accent-stone-600"
            />
            Other
          </label>
        </div>
      </fieldset>

      {/* Terms */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="terms-and-conditions"
          name="terms"
          required
          className="w-4 h-4 mr-2 accent-stone-600"
        />
        <label
          htmlFor="terms-and-conditions"
          className="text-stone-400 text-sm"
        >
          I agree to the terms and conditions
        </label>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          type="reset"
          className="px-4 py-2 text-base rounded bg-transparent text-stone-300 hover:text-stone-500 focus:text-stone-500 cursor-pointer"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-base rounded bg-stone-600 text-stone-300 hover:bg-stone-700 focus:bg-stone-700 cursor-pointer"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}

