import { useState, type RefObject } from "react";

type ControlsProps = {
  audioPlayer: RefObject<HTMLAudioElement | null>;
}

const Controls = ({ audioPlayer }:ControlsProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(0);
  const [volumeIcon, setVolumeIcon] = useState<string>("high");

  const toggleAudio = () => {
      audioPlayer.current?.play();
      setIsPlaying(true);
    if (isPlaying) {
      audioPlayer.current?.pause();
      setIsPlaying(false);
    }
  }

  const toggleMute = () => {
    if (!audioPlayer.current?.muted) {
      audioPlayer.current!.muted = true;
      setVolumeIcon("xmark");
    } else {
      audioPlayer.current!.muted = false;
      setVolumeIcon("high");
    }
  }

  const jump10Seconds = () => {
    if (audioPlayer !== null && audioPlayer.current) {
      audioPlayer.current.currentTime += 10;
    }
  }

  const rewind10Seconds = () => {
    if (audioPlayer !== null && audioPlayer.current) {
      audioPlayer.current.currentTime -= 10;
    }
  }

  return (
    <div className="w-full flex flex-wrap justify-center">
      <div className="w-3/5 bg-gray-600 p-10 py-5 rounded flex justify-center">
        <button
          onClick={() => {rewind10Seconds()}}
          className="p-1 m-2 rounded-full"
        >
          <p className="text-xxs">10</p>
          <i className="fa-solid fa-rotate-left mt-1"></i>
        </button>
        <div className="flex items-center">
          <button className="p-3 scale-110">
            <i className="fa-solid fa-backward"></i>
          </button>
          <button className="py-3 px-6 scale-250" onClick={() => toggleAudio()}>
            {isPlaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
          </button>
          <button className="py-3 pl-2 pr-3 scale-110">
            <i className="fa-solid fa-forward"></i>
          </button>
        </div>
        <button
          onClick={() => {jump10Seconds()}}
          className="p-1 m-2 rounded-full"
        >
          <p className="text-xxs">10</p>
          <i className="fa-solid fa-rotate-right mt-1"></i>
        </button>
      </div>
      <div className="w-3/5 text-center bg-stone-500 p-5 flex items-center justify-center">
        <button onClick={() => {toggleMute()}} className="mr-2">
          <i className={`fa-solid fa-volume-${volumeIcon}`}></i>
        </button>
        <input
          type="range"
          min={1}
          max={100}
          defaultValue={50}
          step={5}
          onChange={(e) => setCurrentVolume(parseInt(e.target.value) / 100)}
          onClick={() => audioPlayer.current!.volume = currentVolume}
          className="range accent-slate-400 appearance-none cursor-pointer rounded-lg bg-stone-700 h-2"
        />
      </div>
    </div>
  );
}
 
export default Controls;