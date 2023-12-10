import "./style.css";
import "../works.json";
function Items() {
  return (
    <div className="items">
      <div className="item">
        <ul>
          <li>
            <div className="works">
              <span>job</span>
            </div>
            <div className="button">
              <span>X</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Items;
