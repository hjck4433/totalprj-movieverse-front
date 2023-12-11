import Button from "../../util/Button";
import { styled } from "styled-components";
import Kiki from "./Kiki";

const KikiListComp = styled.section`
  width: 100%;
  /* outline: 1px solid red; */
  padding-top: 60px;
  
  .container {
    .buttonBox {
      margin-top: 10px;
      margin-bottom: 80px;
      display: flex;
      justify-content: end;
     
      /* outline: 1px solid green; */
      
    }
    .kikiBox {
      height: 120px;
      outline: 1px solid white;
      background-color: var(--LIGHTVIO);
      border-radius: 5px;
      margin-bottom: 50px;
    }

    .chatBox{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 45px;
    }

    .p1{
      color:#000;
      font-weight: 800;
      font-size: 1.5rem;
      /* outline: 1px solid red; */
      margin-right: 65%;

      @media (max-width: 767px){
        font-size: 1.2rem;
        margin-right: 50px;
        
      }

  
      
    }
    .p2{
      color:#000;
      font-weight: 800;
      font-size: 1.3rem;
      /* outline: 1px solid lightgreen; */

      @media (max-width:767px){
        font-size: 1rem;
        
      }

  
    }
    
  }
`;

const KikiList = () => {
  const data = {
    roomName: "더 마블스는 몇 엄복동인가?",
    createdAt: "2023.12.02",
  };
  //   const data = "";
  return (
    <>
      <KikiListComp>
        <div className="container">
          <div className="buttonBox">
            <Button children="키키 추가하기" active={true} front = "var(--VIOLET)" back="var(--LIGHTVIO)"/>
          </div>
          <div className="kikiBox">
            {data ? <Kiki data={data} /> : <div>data없음!</div>}
          </div>
        </div>
      </KikiListComp>
    </>
  );
};
export default KikiList;
