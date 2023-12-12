import React, { useState } from "react";
import filled_heart from "../../images/Bookmark/filled_heart.png";
import empty_heart from "../../images/Bookmark/empty_heart.png";
import { styled } from "styled-components";

const BookmarkComp = styled.div`
  .BookmarkHeart {
    position: absolute;
    right: 0;
    top: 0;
    width: 22%;
    z-index: 1;
    &:hover {
      cursor: pointer;
    }
    img {
      padding: 5%;
    }
  }
`;

const Bookmark = () => {
  const [filled, setFilled] = useState(false);
  const ChangeHeart = () => {
    setFilled(!filled);
  };

  return (
    <BookmarkComp>
      <div className="BookmarkHeart" onClick={ChangeHeart}>
        {filled ? (
          <img src={filled_heart} alt="Filled Heart" />
        ) : (
          <img src={empty_heart} alt="Empty Heart" />
        )}
      </div>
    </BookmarkComp>
  );
};

export default Bookmark;
