import tags from "../../Data/tags.json";
import "./Tags.scss";
const Tags = ({ selectedTag, setSelectedTag }) => {
  return (
    <div className="tags-panel-open">
      <div className="tags__panel">
        <h2 className="tags__heading">Filters</h2>
        <div className="tags__group">
          {tags.map((tag, index) => (
            <p
              key={index}
              className={`tags-panel__tag
                            ${
                              selectedTag === tag
                                ? "tags-panel__tag--selected"
                                : ""
                            }`}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tags;
