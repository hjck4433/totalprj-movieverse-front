import { styled } from "styled-components";
import { useState, useEffect } from "react";


/* 내 게시글\댓글 페이지*/ 
const MempostSortComp = styled.section`
   


    .container{
        height: 150px;
        text-align: center;
        /* outline: 1px solid red; */
    }

    button {
        padding-top: 90px;
        background: none;
        border: none;
        color: white;
        transition: 0.1s ease-in;
        
        &:hover{
            cursor: pointer;
        }

        &.written {
            margin-right: 10px;
            vertical-align: text-bottom;
            font-weight: ${({ selectedButton }) =>
            selectedButton === "written" ? "bold" : "normal"};
            font-size: ${({ selectedButton }) =>
            selectedButton === "written" ? "1.3em" : "1.1em"};
            line-height: 1;
        }

        &.comment{
            vertical-align: text-bottom;
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
                className={`written ${
                    selectedButton === "written" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("written")}
            >
                작성글
            </button>
            <button
                className={`comment ${selectedButton === "comment" ? "selected" : ""}`}
                onClick={() => handleButtonClick("comment")}
            >
                작성댓글
            </button>
        </div>
    </MempostSortComp>
   );
};


export default MempostSort;