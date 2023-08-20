import Controls from "./components/Controls";
import Player from "./components/Player";
import { useRef } from "react";

const TRACK = "src/assets/I Can't Stay.mp3";

function App() {
  const audioPlayer = useRef<HTMLAudioElement | null>(null);

  return (
    <div className="w-screen h-screen m-0 p-0 flex items-center bg-stone-200">
      <div className="w-full flex flex-wrap">
        <Player ref={audioPlayer} src={TRACK} />
        <Controls audioPlayer={audioPlayer} />
      </div>
    </div>
  );
}

export default App;
