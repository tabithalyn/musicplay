import { useState } from "react";
import Tracklist from "./Tracklist";

const Info = () => {
  const [viewTracklist, setViewTracklist] = useState(false);

  const toggleTracklist = () => {
    if (!viewTracklist) {
      setViewTracklist(true);
    } else {
      setViewTracklist(false);
    }
  }

  return (
    <div className="w-full flex flex-wrap justify-center items-center p-0">
        <div className="w-full flex justify-end p-3">
          { viewTracklist && <Tracklist /> }
          <button onClick={() => toggleTracklist()} className="-mr-4 mt-2">
            {!viewTracklist ? <i className="fa-solid fa-list"></i> : <i className="fa-solid fa-xmark"></i>}
          </button>
        </div>
      <div className="w-4/5 flex flex-wrap">
        <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v934-nunny-12_2.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=5daa7331c99ebbe9834025aa32b13c96" alt="" className="w-2/5 h-2/5" />
        <div className="w-3/5 flex flex-wrap justify-center items-center">
          <span className="text-lg w-full text-center py-4">Song Title</span>
          <span className="w-full text-center b py-4">Artist</span>
        </div>
      </div>
    </div>
  );
}
 
export default Info;