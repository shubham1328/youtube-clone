import React from "react";

export const CommentList = ({comments}) => {
   
  return comments && comments.map((comment,index) => (
    <div key={index}>
        <Comment  data={comment} />
        <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies}/>
        </div>
    </div>
  ));
};

const Comment = (props) => {
  const { data } = props;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-md my-2">
      <img
        className="w-12 h-12"
        alr="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"
      />
      <div className="px-3">
        <p className="font-bold">{data.name}</p>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default Comment;
