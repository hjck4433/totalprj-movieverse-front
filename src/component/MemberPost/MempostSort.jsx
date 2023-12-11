import { styled } from "styled-components";
import { useState, useEffect } from "react";


/* 내 게시글\댓글 페이지*/ 
const MempostSortComp = styled.section`
    width: 100%;
    padding: 50px;
    

    .container{
        text-align: center;
        outline: 1px solid red;
    }

    button {
        background: none;
        border: none;
        color: white;
        font-size: 1.3rem;
        font-weight: 600;
        margin: 30px;
        transition: font-size 0.2s, font-weight 0.2s;

        &:hover{
            cursor: pointer;
        }

        &.written {
            font-weight: ${({ selectedButton }) =>
            selectedButton === "written" ? "bold" : "normal"};
            font-size: ${({ selectedButton }) =>
            selectedButton === "written" ? "1.3em" : "1.1em"};
            line-height: 1;
        }

        &.comment{
            font-weight: ${({ selectedButton })=>
            selectedButton === "comment" ? "bold" : "normal"};
            font-size: ${({ selectedButton })=>
        selectedButton === "comment" ? "1.3em" : "1.1em"};
        line-height: 1;
        }

    }

`;

const MempostSort = ({defaultSelectedButton = "written"}) => {
    const [selectedButton, setSelectedButton] =useState(defaultSelectedButton);

    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    useEffect(() => {
        setSelectedButton(defaultSelectedButton);
    }, [defaultSelectedButton]);

   return (
    <MempostSortComp selectedButton={selectedButton} >
        <div className="container">
            <button
                className={`written ${selectedButton === "written" ? "selected" : ""}`}
                onClick={() => handleButtonClick("written")}
            >
                {selectedButton === "written" ? "작성글" : "작성글"}
            </button>
            <button
                className={`comment ${selectedButton === "comment" ? "selected" : ""}`}
                onClick={() => handleButtonClick("comment")}
            >
                {selectedButton === "comment" ? "작성댓글" : "작성댓글"}
            </button>
        </div>
    </MempostSortComp>
   );
};


export default MempostSort;