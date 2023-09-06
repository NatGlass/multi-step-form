// Step number will be given from the index when mapped over
const step = [
  {
    label: "Your Info",
    number: 1,
  },
  {
    label: "Select Plan",
    number: 2,
  },
  {
    label: "Add-ons",
    number: 3,
  },
  {
    label: "Summary",
    number: 4,
  },
];

const Steps = ({ activeStep }: { activeStep: number }) => {
  return (
    <div className="text-white text-[14px] flex flex-col justify-between w-[153px] h-[228px]">
      {step.map((step, index) => {
        index += 1;
        return (
          <div key={index} className="flex items-center">
            <span
              className={`rounded-full w-[33px] h-[33px] p-[5px] border font-bold text-center ${
                activeStep === index ? "bg-sky-200" : ""
              }`}
            >
              {index}
            </span>
            <div className="ml-4">
              <p className="text-pastel-blue">STEP {index}</p>
              <h3 className="uppercase font-bold">{step.label}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
