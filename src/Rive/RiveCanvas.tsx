import { useRive } from "@rive-app/react-canvas";
import { Dispatch, SetStateAction, useEffect } from "react";
interface IRiveCanvasProps {
  animation: string;
  src: string;
  stateMachineName: string;
  setStateMachineNames: Dispatch<SetStateAction<string[]>>;
  setAnimationNames: Dispatch<SetStateAction<string[]>>;
}

const RiveCanvas: React.FC<IRiveCanvasProps> = ({
  animation,
  src,
  stateMachineName,
  setStateMachineNames,
  setAnimationNames,
}) => {
  const { rive, RiveComponent } = useRive({
    src: src,
    stateMachines: stateMachineName ? stateMachineName : animation,
    animations: animation,
    autoplay: true,
  });
  useEffect(() => {
    if (rive?.stateMachineNames) setStateMachineNames(rive?.stateMachineNames);
    if (rive?.animationNames) setAnimationNames(rive?.animationNames);
  }, [rive, setStateMachineNames, setAnimationNames]);
  return <RiveComponent />;
};

export default RiveCanvas;
