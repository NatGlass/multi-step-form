import { useState } from "react";

const Form = ({
  activeStep,
  setActiveStep,
}: {
  activeStep: number;
  setActiveStep: (step: number) => void;
}) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const increment = () => {
    setSubmitted(true);

    if (
      inputs.name === "" ||
      inputs.email === "" ||
      inputs.phoneNumber === ""
    ) {
      return;
    }

    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    } else {
      return;
    }
  };

  const decrement = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div className="pt-10">
      {activeStep === 1 && (
        <>
          <h1 className="text-3xl font-bold text-marine-blue pb-[11px]">
            Personal info
          </h1>
          <p className="text-cool-gray pb-10">
            Please provide your name, email address and phone number.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
            <label className="pb-2 text-marine-blue">Name</label>
            <input
              value={inputs.name}
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="e.g. Stephen King"
              className="border rounded-lg p-2"
              required
            />
            {submitted && inputs.name === "" ? (
              <p className="text-red-500 pt-2">Name cannot be empty</p>
            ) : null}
            <label className="pb-2 pt-6 text-marine-blue">Email Address</label>
            <input
              value={inputs.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              className="border rounded-lg p-2"
              required
            />
            {submitted && inputs.email === "" ? (
              <p className="text-red-500 pt-2">Email cannot be empty</p>
            ) : null}
            <label className="pb-2 pt-6 text-marine-blue">Phone Number</label>
            <input
              value={inputs.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              type="text"
              placeholder="e.g. +1 234 567 890"
              className="border rounded-lg p-2"
              required
            />
            {submitted && inputs.phoneNumber === "" ? (
              <p className="text-red-500 pt-2">Phone number cannot be empty</p>
            ) : null}
          </form>
        </>
      )}
      <div className="flex justify-between mt-24">
        <button onClick={() => decrement()} className="text-cool-gray">
          {activeStep > 1 ? "Go Back" : null}
        </button>
        <button
          type="submit"
          onClick={() => increment()}
          className="text-white bg-marine-blue py-3 px-5 rounded-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Form;
