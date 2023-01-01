import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">首頁</h1>
        <ArrowPathIcon
          className="mr-5 mt-5 h-8 w-8 cursor-pointer 
      text-twitter transition-all duration-500 ease-out 
      hover:rotate-180 active:scale-125"
        />
      </div>
      <div>
        <TweetBox />
      </div>
      <div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="jackey0517"
          options={{ height: 1000 }}
        />
      </div>
    </div>
  );
}

export default Feed;
