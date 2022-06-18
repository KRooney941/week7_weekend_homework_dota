import React, {useState} from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

const CommentBox = () => {

  const [comments, setComments] = useState(
    []
  )

  const addComment = (submittedComment) => {
    submittedComment.id = Date.now();
    const updatedComments = [...comments, submittedComment];
    setComments(updatedComments);
  }

  return (
    <div className="all-comments">
      <h2 className="comments">Comments</h2>
      <CommentList comments={comments} />
      <h2 className="add-comment">Add a comment:</h2>
      <CommentForm onCommentSubmit={(comment) => addComment(comment)}/>
    </div>
  );

}

export default CommentBox;