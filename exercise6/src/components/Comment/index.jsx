import Divider from "../divider";
import './style.css'
function Comments({ allComments, currentDepthComment }) {
  return currentDepthComment.map((comment) => {
    const childern = allComments.filter(
      (singleComment) => singleComment.parentId === comment.id
    );
    return (
      <div className="comment" key={comment.id}>
        <div className="comment__header">
          <p className="comment__info">سه شنبه 28آذر توسط علی:</p>
          <button className="comment__reply">پاسخ</button>
        </div>
        <Divider light={false} />
        <p className="comment__body">{comment.text}</p>
        <div className="comment__replies">
          <Comments allComments={allComments} currentDepthComment={childern}/>
        </div>
      </div>
    );
  });
}
export default Comments;
