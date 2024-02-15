import { useRive } from "@rive-app/react-canvas";
interface IRiveCanvasProps {
  src: string;
  stateMachineName: string;
}
const RiveCanvas: React.FC<IRiveCanvasProps> = ({ src, stateMachineName }) => {
  console.log(src);
  const { RiveComponent } = useRive({
    src: src,
    stateMachines: stateMachineName,
    autoplay: true,
  });
  return <RiveComponent />;
};

export default RiveCanvas;
