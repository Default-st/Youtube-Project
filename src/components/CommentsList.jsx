import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments?.map((comment, idx) => (
    <div key={idx}>
      <Comment data={comment} />
      <div className="pl-5 border-l border-black ml-5">
        <CommentsList comments={comment?.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
