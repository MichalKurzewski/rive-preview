import { useState } from "react";
import RiveCanvas from "./Rive/RiveCanvas";
function App() {
  const [riveSrc, setRiveSrc] = useState(
    "https://cdn.rive.app/animations/vehicles.riv"
  );
  const [stateMachineNames, setStateMachineNames] = useState<string[]>([]);
  const [stateMachineName, setStateMachineName] = useState<string>("");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file) {
        const blobUrl = URL.createObjectURL(file);
        setRiveSrc(blobUrl);
      }
    }
  };
  const handleStateMachineChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStateMachineName(event.target.value);
  };

  return (
    <div className="container m-auto h-svh">
      <form className="p-4 border-b-2" action="submit">
        <input type="file" name="file" onChange={handleFileChange} />
        {stateMachineNames?.length > 0 && (
          <select
            value={stateMachineName}
            onChange={handleStateMachineChange}
            className="ml-4"
          >
            <option value="">Select a State Machine</option>
            {stateMachineNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        )}
      </form>

      <div
        key={riveSrc + stateMachineName}
        className="w-full h-[calc(100%-150px)]"
      >
        <RiveCanvas
          src={riveSrc}
          stateMachineName={stateMachineName}
          setStateMachineNames={setStateMachineNames}
        />
      </div>
    </div>
  );
}

export default App;
