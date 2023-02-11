import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import "./tweet.modules.css";

interface TweetProps {
  tweet: {
    name: string;
    userName: string;
    content: string;
    comments: number;
    srcImg?: string;
    likes: number;
    replied: number;
  };
}

export function Tweet({tweet} : TweetProps) {
  return (
    <a href="#" className="tweet">
      <img src={tweet.srcImg ? tweet.srcImg : 'https://github.com/ErickCordeiro.png'} alt="Erick Cordeiro" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>{tweet.name}</strong>
          <span>{tweet.userName}</span>
        </div>

        <p>{tweet.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            {tweet.comments}
          </button>

          <button type="button">
            <ArrowClockwise />
            {tweet.replied}
          </button>

          <button type="button">
            <Heart />
            {tweet.likes}
          </button>
        </div>
      </div>
    </a>
  );
}
