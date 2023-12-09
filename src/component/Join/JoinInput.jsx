import Button from "../../util/Button";
import { styled } from "styled-components";

const InputButtonComp = styled.div`
  width: 100%;
  margin-bottom: 30px;
  position: relative;
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
  .msg {
    position: absolute;
    padding-top: 5px;
    padding-left: 2px;
    letter-spacing: 0.8px;
    font-size: 0.9em;
    font-weight: 600;
    &.fail {
      color: red;
    }
  }
`;

export const InputButton = (props) => {
  const { value, holder, changeEvt, type, btnChild, active, msg, msgType } =
    props;

  return (
    <InputButtonComp>
      <div className="inputWrap">
        <input
          type={type ? type : "text"}
          defaultValue={value}
          placeholder={holder}
          onChange={(e) => changeEvt(e)}
        />
        <Button
          children={btnChild}
          active={active}
          width="30%"
          height="48px"
          fontSize="14px"
        />
      </div>
      <div className={`msg ${msgType ? "" : "fail"}`}>{msg}</div>
    </InputButtonComp>
  );
};

const InputComp = styled.div`
  width: 100%;
  margin-bottom: 30px;
  position: relative;
  input {
    width: 100%;
    height: 48px;
    padding: 0 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1em;
  }
  .msg {
    position: absolute;
    padding-top: 5px;
    padding-left: 2px;
    letter-spacing: 0.8px;
    font-size: 0.9em;
    font-weight: 600;
    &.fail {
      color: red;
    }
  }
`;
export const Input = (props) => {
  const { value, holder, changeEvt, type, msg, msgType } = props;
  return (
    <InputComp>
      <input
        type={type ? type : "text"}
        value={value}
        placeholder={holder}
        onChange={(e) => changeEvt(e)}
      />
      <div className={`msg ${msgType ? "" : "fail"}`}>{msg}</div>
    </InputComp>
  );
};

export const Address = (props) => {
  const { value, open } = props;
  return (
    <InputComp>
      <input
        type="text"
        placeholder="주소찾기"
        defaultValue={value}
        readOnly={true}
        onClick={open}
      />
    </InputComp>
  );
};
