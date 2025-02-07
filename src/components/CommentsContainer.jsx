import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";
const commentsData = [
  {
    name: "Satya",
    text: "Hi from parent",
    replies: [
      {
        name: "Satyansh",
        text: "Hi from child",
        replies: [
          {
            name: "Satyansh Sri",
            text: "Hi from grandChild",
            replies: [
              {
                name: "Satyansh Srivastava",
                text: "Hi from grand grand child",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Satya",
    text: "Hi from parent2",
    replies: [
      {
        name: "Satyansh",
        text: "Hi from child2",
        replies: [
          {
            name: "Satyansh Sri",
            text: "Hi from grandChild2",
            replies: [
              {
                name: "Satyansh Srivastava",
                text: "Hi from grand grand child2",
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      CommentsContainer
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
