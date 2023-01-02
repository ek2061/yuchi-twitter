import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";
import toast from "react-hot-toast";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import TweetComponent from "./Tweet";
import TweetBox from "./TweetBox";

interface FeedProps {
  tweets: Tweet[];
}

function Feed({ tweets: tweetsProp }: FeedProps) {
  const [tweets, setTweets] = React.useState<Tweet[]>(tweetsProp);

  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing...");

    const tweets = await fetchTweets();
    setTweets(tweets);

    toast.success("Feed Updated!", { id: refreshToast });
  };

  return (
    <div className="col-span-7 max-h-screen overflow-scroll border-x scrollbar-hide lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">首頁</h1>
        <ArrowPathIcon
          onClick={handleRefresh}
          className="mr-5 mt-5 h-8 w-8 cursor-pointer 
      text-twitter transition-all duration-500 ease-out 
      hover:rotate-180 active:scale-125"
        />
      </div>
      <div>
        <TweetBox setTweets={setTweets} />
      </div>
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
