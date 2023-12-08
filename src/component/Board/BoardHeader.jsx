import BoardComp from "./BoardHeaderStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const BoardHeaderList = ({ category, title, description }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  return (
    <BoardComp>
      <div className="wrapper">
        <div className="container">
          <div className="boardCategory">
            {category.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="boardText">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="boardSearch">
            <div className="inputBox">
              <input type="text" placeholder="검색어를 입력해 주세요." />
            </div>
            <div className="searchBox">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      </div>
    </BoardComp>
  );
};

export default BoardHeaderList;
