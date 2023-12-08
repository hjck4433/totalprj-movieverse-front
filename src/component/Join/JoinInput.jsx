import Button from "../../util/Button";
import { styled } from "styled-components";

const InputButtonComp = styled.div`
  width: 100%;
  margin-bottom: 30px;
  .inputWrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    input {
      width: 64%;
      outline: none;
      font-size: 1em;
      padding: 0 10px;
      border: none;
      border-radius: 5px;
    }
  }
`;

export const InputButton = (props) => {
  const { holder, btnChild, active, type } = props;
  return (
    <InputButtonComp>
      <div className="inputWrap">
        <input type={type ? type : "text"} placeholder={holder} />
        <Button children={btnChild} active={active} width="30%" height="48px" />
      </div>
    </InputButtonComp>
  );
};

const InputComp = styled.div`
  width: 100%;
  margin-bottom: 30px;
  input {
    width: 100%;
    height: 48px;
    padding: 0 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1em;
  }
`;
export const Input = (props) => {
  const { holder, type } = props;
  return (
    <InputComp>
      <input type={type ? type : "text"} placeholder={holder} />
    </InputComp>
  );
};
