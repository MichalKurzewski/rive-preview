import { useState } from "react";
import RiveCanvas from "./Rive/RiveCanvas";
import { useDebounce } from "use-debounce";

function App() {
  const [riveSrc, setRiveSrc] = useState(
    "https://cdn.rive.app/animations/vehicles.riv"
  );
  const [stateMachineName, setStateMachineName] = useState("");
  const [debouncedValue] = useDebounce(stateMachineName, 500);
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

  const handleStateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setStateMachineName(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div className="container m-auto h-svh">
      <form className="p-4 border-b-2" action="submit">
        <input type="file" name="file" onChange={handleFileChange} />
        <input
          className="p-4 border-2"
          type="text"
          placeholder="State Machine Name"
          onChange={handleStateName}
          onKeyDown={handleKeyDown}
        />
      </form>

      <div
        key={riveSrc + debouncedValue}
        className="w-full h-[calc(100%-150px)]"
      >
        <RiveCanvas src={riveSrc} stateMachineName={debouncedValue} />
      </div>
    </div>
  );
}

export default App;