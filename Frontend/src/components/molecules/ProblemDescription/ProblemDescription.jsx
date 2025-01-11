export default function ProblemDescription({ details }) {
  return (
    <div className="h-full rounded-md bg-white py-4 border-2 border-solid border-white overflow-scroll ">
      <div className="text-sm font-semibold h-6 flex items-center border-b border-gray-300">Description</div>
      <div className="pr-4 my-2 font-semibold text-lg">
        {details.order}. {details.title}
      </div>
      <div className="text-sm font-medium" style={{ color: "green" }}>
         {details.difficult} {/*TODO: Change color based on the difficulty */}
      </div>
      <div className="text-sm mb-8">{details.description}</div>
      <div className="problem-examples">
        {details.examples?.map((example, index) => {
          return (
            <div className="example-container" key={index}>
              <div className="text-sm font-bold">Example {index + 1}:</div>
              <div className="bg-[#000a2008] p-3 rounded-lg text-sm mx-4 text-[#262626]">
                <strong>Input:</strong> {example.input} <br />
                <strong>Output:</strong> {example.output}
                <br />
                <strong>Explanation:</strong> {example.explanation}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 text-sm">
        <div className="text-sm font-bold">Constraints:</div>
        {details.constraints?.map((constraint, index) => {
          return <li key={index}>{constraint}</li>;
        })}
      </div>
    </div>
  );
}