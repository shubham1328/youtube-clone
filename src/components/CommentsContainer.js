import React from "react";
import Comment, { CommentList } from "./Comment";

const commentsData = [
  {
    name: "Shubham",
    text: "Lets subscrib to channel",
    replies: [],
  },
  {
    name: "Shubham",
    text: "Lets subscrib to channel",
    replies: [
      {
        name: "Shubham",
        text: "Lets subscrib to channel",
        replies: [],
      },
      {
        name: "Shubham",
        text: "Lets subscrib to channel",
        replies: [
          {
            name: "Shubham",
            text: "Lets subscrib to channel",
            replies: [
              {
                name: "Shubham",
                text: "Lets subscrib to channel",
                replies: [
                  {
                    name: "Shubham",
                    text: "Lets subscrib to channel",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Shubham",
        text: "Lets subscrib to channel",
        replies: [],
      },
      {
        name: "Shubham",
        text: "Lets subscrib to channel",
        replies: [],
      },
    ],
  },

  {
    name: "Shubham",
    text: "Lets subscrib to channel",
    replies: [{}],
  },
  {
    name: "Shubham",
    text: "Lets subscrib to channel",
    replies: [{}],
  },
  {
    name: "Shubham",
    text: "Lets subscrib to channel",
    replies: [{}],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
