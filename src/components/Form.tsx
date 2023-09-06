import { useState } from "react";

const Form = ({activeStep, setActiveStep}: {activeStep: number, setActiveStep}) => {
  const increment = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1)
    } else {
      return;
    }
  }

  const decrement = () => {
    setActiveStep(activeStep - 1)
  } 

  return (
    <div className="pt-10">
        <h1 className="text-3xl font-bold text-marine-blue pb-[11px]">Personal info</h1>
        <p className="text-cool-gray pb-10">Please provide your name, email address and phone number.</p>
        <form className="flex flex-col">
            <label className="pb-2 text-marine-blue">Name</label>
            <input type="text" placeholder="e.g. Stephen King" className="border rounded-lg p-2" />
            <label className="pb-2 pt-6 text-marine-blue">Email Address</label>
            <input type="email" placeholder="e.g. stephenking@lorem.com" className="border rounded-lg p-2" />
            <label className="pb-2 pt-6 text-marine-blue">Phone Number</label>
            <input type="text" placeholder="e.g. +1 234 567 890" className="border rounded-lg p-2" />
        </form>
        <div className="flex justify-between mt-24">
          <button onClick={() => decrement()} className="text-cool-gray">{activeStep > 1 ? "Go Back" : null}</button>
            <button onClick={() => increment()} className="text-white bg-marine-blue py-3 px-5 rounded-lg">Next Step</button>
        </div>
    </div>
  )
}

export default Form