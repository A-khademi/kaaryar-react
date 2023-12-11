import "./style.css";
import works from "./works.json";
function Works() {
  return (
    <div>
      {works.map((work) => (
        <div className="item">
          <ul>
            <li>
              <div className="works">
                <span className="button">X</span>
                <p className="job">{work.title}</p>
              </div>
            </li> 
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Works;
