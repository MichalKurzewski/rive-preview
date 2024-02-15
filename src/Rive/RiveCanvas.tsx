import { useRive } from "@rive-app/react-canvas";
import { Dispatch, SetStateAction, useEffect } from "react";
interface IRiveCanvasProps {
  src: string;
  stateMachineName: string;
  setStateMachineNames: Dispatch<SetStateAction<string[]>>;
}
const RiveCanvas: React.FC<IRiveCanvasProps> = ({
  src,
  stateMachineName,
  setStateMachineNames,
}) => {
  const { rive, RiveComponent } = useRive({
    src: src,
    stateMachines: stateMachineName,
    autoplay: true,
  });
  useEffect(() => {
    if (rive?.stateMachineNames) setStateMachineNames(rive?.stateMachineNames);
  }, [rive, setStateMachineNames]);

  return <RiveComponent />;
};

export default RiveCanvas;
