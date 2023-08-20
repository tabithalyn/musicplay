
type TimerProps = {
  duration: string;
  currentTime: string;
}

const Timer = ({ duration, currentTime }: TimerProps) => {
  function secondsToHms(seconds: number) {
    if (!seconds) return "00m 00s";

    let duration = seconds;
    const hours = duration / 3600;
    duration = duration % 3600;

    let min:string|number = duration / 60;
    duration = duration % 60;

    let sec:string|number = duration;

    if (sec < 10) sec = `0${sec}`;
    if (min < 10) min = `0${min}`;

    if (parseInt((hours).toString(), 10) > 0) {
      return `${hours}h ${min}m ${sec}s`;
    } else if (min === 0) {
      return `00m ${sec}s`;
    } else {
      return `${min}m ${sec}s`;
    }

  }
  return (
    <div className="control-panel">
      <div className="timer">{secondsToHms(parseInt(currentTime))}</div>
      <div className="timer">{secondsToHms(parseInt(duration))}</div>
    </div>
  );
}
 
export default Timer;