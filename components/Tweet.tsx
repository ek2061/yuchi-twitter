import {
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import React from "react";
import toast from "react-hot-toast";
import TimeAgo from "react-timeago";
import { Comment, CommentBody, Tweet } from "../typings";
import { fetchComments } from "../utils/fetchComments";

interface TweetProps {
  tweet: Tweet;
}

function Tweet({ tweet }: TweetProps) {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [commentBoxVisable, setCommentBoxVisable] =
    React.useState<boolean>(false);
  const [input, setInput] = React.useState<string>("");
  const { data: session } = useSession();

  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id);
    setComments(comments);
  };

  const postComment = async () => {
    const commentInfo: CommentBody = {
      comment: input,
      tweetId: tweet._id,
      username: session?.user?.name || "UnknownUser",
      profileImg: session?.user?.image || "https://links.papareact.com/gll",
    };

    const result = await fetch(`/api/addComments`, {
      body: JSON.stringify(commentInfo),
      method: "POST",
    });

    const json = await result.json();

    const newComments = await fetchComments(tweet._id);
    setComments(newComments);

    toast("Comment Posted", {
      icon: "🚀",
    });

    return json;
  };

  React.useEffect(() => {
    refreshComments();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postComment();

    setInput("");
  };

  return (
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={tweet.profileImg}
          alt=""
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, "").toLocaleLowerCase()} ·
            </p>
            <TimeAgo
              className="text-sm text-gray-500"
              date={tweet._createdAt}
            />
          </div>
          <p className="pt-1">{tweet.text}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              alt=""
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
          <div className="mt-5 flex justify-between">
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
              <ChartBarIcon className="h-5 w-5" />
            </div>
            <div
              onClick={() =>
                session && setCommentBoxVisable(!commentBoxVisable)
              }
              className="flex cursor-pointer items-center space-x-3 text-gray-400"
            >
              <ChatBubbleOvalLeftIcon className="h-5 w-5" />
              <p>{comments.length}</p>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
              <ArrowPathRoundedSquareIcon className="h-5 w-5" />
            </div>
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
              <HeartIcon className="h-5 w-5" />
            </div>
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
              <ArrowUpTrayIcon className="h-5 w-5" />
            </div>
          </div>

          {commentBoxVisable && (
            <form onSubmit={handleSubmit} className="mt-3 flex space-x-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 rounded-lg bg-gray-100 p-2 outline-none"
                type="text"
                placeholder="推你的回覆"
              />
              <button
                disabled={!input}
                type="submit"
                className="text-twitter disabled:text-gray-200"
              >
                回覆
              </button>
            </form>
          )}

          {comments?.length > 0 && (
            <div
              className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t 
            border-gray-100 p-5 pl-0"
            >
              {comments.map((comment) => (
                <div key={comment._id} className="flex space-x-2 relative">
                  <hr className="absolute left-5 top-10 h-8 border-x border-gray-300" />
                  <img
                    src={comment.profileImg}
                    className="mt-2 h-7 w-7 rounded-full object-cover"
                    alt=""
                  />
                  <div>
                    <div className="flex items-center space-x-1">
                      <p className="mr-1 font-bold">{comment.username}</p>
                      <p className="hidden text-sm text-gray-500 lg:inline">
                        @
                        {comment.username
                          .replace(/\s+/g, "")
                          .toLocaleLowerCase()}{" "}
                        ·
                      </p>
                      <TimeAgo
                        className="text-sm text-gray-500"
                        date={comment._createdAt}
                      />
                    </div>
                    <p>{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
