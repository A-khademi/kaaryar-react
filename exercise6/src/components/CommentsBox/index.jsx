import Divider from "../divider";
import "./style.css";
import allComments from "../../comments.json";
import Comments from "../Comment";
function CommentsBox() {
  console.log({ allComments });
  const rootComments = allComments.filter(
    (comment) => comment.parentId === null
  );
  console.log({ rootComments });
  
  return (
    <section className="comments-box">
      <h1 className="comments-box__title">نظرات</h1>
      <Divider />
      <Comments allComments={allComments} currentDepthComment={rootComments}/>
    </section>
  );
}

export default CommentsBox;
