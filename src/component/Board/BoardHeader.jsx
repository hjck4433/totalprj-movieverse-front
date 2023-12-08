import BoardComp from "./BoardStyle";

const BoardHeaderList = ({ category, title, description }) => {
  return (
    <BoardComp>
      <div className="container">
        <div className="boardCategory">
          {category.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="boardText">
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
        <div className="boardSearch">
          <input type="text" />
        </div>
      </div>
    </BoardComp>
  );
};

export default BoardHeaderList;
