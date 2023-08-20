import { tracklist } from "../tracklist";

const Tracklist = () => {
  return (
    <div className="bg-white md:w-[45%] lg:w-[50%] h-[50%] z-20 p-3 mt-4 mr-7 absolute shadow-xl rounded-lg sm:mt-1 sm:w-[47%] sm:mr-1">
      <ul className="list-none flex flex-wrap gap-1 overflow-y-auto">
        {tracklist.map((track) => (
          <li key={track.id} className="w-full flex flex-wrap justify-between py-2 border-2 px-1">
            <span>{track.name}</span>
            <span>{track.artist}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tracklist;