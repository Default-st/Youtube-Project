import { useEffect } from "react";
import { useStore } from "../utils/store";
import { useSearchParams } from "react-router";

const WatchPage = () => {
  const { closeMenu } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    closeMenu();
  }, []);

  return (
    <div className="px-5">
      <iframe
        width="1200"
        height="900"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
