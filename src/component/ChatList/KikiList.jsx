import Button from "../../util/Button";
import { styled } from "styled-components";
import Kiki from "./Kiki";

const KikiListComp = styled.section`
  width: 100%;
  outline: 1px solid red;
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
      /* min-height: 30vh; */
      outline: 1px solid white;
      background-color: var(--LIGHTVIO);
      border-radius: 5px;
      font-weight: 600;
      font-size: 1.1rem;
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
