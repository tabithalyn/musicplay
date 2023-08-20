import { forwardRef } from "react";
import Info from "./Info";

type PlayerProps = {
  src: string;

}

const Player = forwardRef<HTMLAudioElement, PlayerProps>(({ src }, ref) => {

  return (
    <div className="w-full flex justify-center">
      <div className="w-3/5 rounded bg-slate-400 px-10 pt-5 pb-10 justify-center flex">
        <audio
          src={src}
          ref={ref}
          controls
          hidden
        ></audio>
        <Info />
      </div>
    </div>
  );
});
 
export default Player;