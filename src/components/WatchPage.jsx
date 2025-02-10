import { useEffect } from "react";
import { useStore } from "../utils/store";
import { useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const { closeMenu } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    closeMenu();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="pt-5 px-5 flex w-full">
        <div>
          <iframe
            width="1350"
            height="700"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
