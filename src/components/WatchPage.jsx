import { useEffect } from "react";
import { useStore } from "../utils/store";
import { useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const { closeMenu } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    closeMenu();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="pt-5 px-5">
        <iframe
          width="1500"
          height="700"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
