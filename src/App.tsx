import { useState } from "react";
import RiveCanvas from "./Rive/RiveCanvas";
function App() {
  const [riveSrc, setRiveSrc] = useState(
    "https://cdn.rive.app/animations/vehicles.riv"
  );
  const [stateMachineNames, setStateMachineNames] = useState<string[]>([]);
  const [animationNames, setAnimationNames] = useState<string[]>([]);
  const [stateMachineName, setStateMachineName] = useState<string>("");
  const [animationName, setAnimationName] = useState<string>("");
  const [color, setColor] = useState<string>("#000");
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
  const handleAnimationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAnimationName(event.target.value);
  };
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div className="m-auto h-svh" style={{ background: `${color}` }}>
      <form
        className="p-4 items-center flex gap-5 bg-slate-500/50"
        action="submit"
      >
        <div className="w-full h-full bento-box flex flex-col items-center justify-center">
          <h1>Rive File</h1>
          <input
            className="h-full bento-box "
            type="file"
            name="file"
            onChange={handleFileChange}
            accept=".riv"
          />
        </div>
        <div className="flex flex-col bento-box w-full h-full items-center">
          <h1>Background color</h1>
          <input
            className="w-full h-20 border-2 rounded-xl"
            type="color"
            onChange={handleColorChange}
          />
        </div>
        <div className="w-full h-full bento-box flex flex-col items-center ">
          <h1>State Machine</h1>
          {stateMachineNames?.length > 0 && (
            <select
              value={stateMachineName}
              onChange={handleStateMachineChange}
              className="w-full h-full bento-box"
            >
              <option value="">Select a State Machine</option>
              {stateMachineNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="w-full h-full bento-box  flex flex-col items-center ">
          <h1>Animation</h1>
          {stateMachineNames?.length > 0 && (
            <select
              value={animationName}
              onChange={handleAnimationChange}
              className="w-full h-full bento-box"
            >
              <option value="">Select Animation</option>
              {animationNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          )}
        </div>
      </form>

      <div
        key={riveSrc + stateMachineName + animationName}
        className="w-full h-[calc(100%-200px)] border-2"
      >
        <RiveCanvas
          animation={animationName}
          src={riveSrc}
          stateMachineName={stateMachineName}
          setStateMachineNames={setStateMachineNames}
          setAnimationNames={setAnimationNames}
        />
      </div>
    </div>
  );
}

export default App;
