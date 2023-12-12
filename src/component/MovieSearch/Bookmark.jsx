import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const BookmarkComp = styled.div`
  .BookmarkBox {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;
    margin: 5px;
    z-index: 10;
    &:hover {
      cursor: pointer;
    }
    .BookmarkAround {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .heart {
        font-size: 1.3rem;
        color: var(--LIGHTVIO);
        opacity: 0.2;
        &.marked {
          opacity: 1;
        }
      }

      &:hover {
        .heart {
          opacity: 1;
          &.marked {
            opacity: 1;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
  }
`;

const Bookmark = () => {
  const [marked, setMarked] = useState(false);
  const changeHeart = () => {
    marked ? setMarked(false) : setMarked(true);
  };

  useEffect(() => {
    console.log("marked : " + marked);
  }, [marked]);

  return (
    <BookmarkComp>
      <div className="BookmarkBox">
        <div className="BookmarkAround" onClick={changeHeart}>
          <FontAwesomeIcon
            icon={faHeart}
            className={`heart ${marked ? "" : "marked"}`}
            // className="heart marked"
          />
        </div>
      </div>
    </BookmarkComp>
  );
};

export default Bookmark;
