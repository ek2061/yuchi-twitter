import {
  CalendarIcon,
  FaceSmileIcon,
  GifIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function TweetBox() {
  const [input, setInput] = React.useState<string>("");

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src="https://pbs.twimg.com/profile_images/879268633645416448/WN8C4m15_normal.jpg"
        alt=""
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="有什麼新鮮事？"
            className="h-24 w-full text-xl outline-none 
            placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotoIcon
                className="h-5 w-5 cursor-pointer 
              transition-transform duration-150 ease-out 
              hover:scale-150"
              />
              <GifIcon className="h-5 w-5" />
              <FaceSmileIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <MapPinIcon className="h-5 w-5" />
            </div>
            <button
              disabled={!input}
              className="rounded-full bg-twitter px-5 py-2 
              font-bold text-white disabled:opacity-40"
            >
              推文
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
