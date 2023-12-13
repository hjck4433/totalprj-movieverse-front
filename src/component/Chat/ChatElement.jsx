import { styled } from "styled-components";

const SenderComp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .profileWrap {
    width: 15%;
    .profileBox {
      display: inline-block;
      width: 100%;
      padding-bottom: 100%;
      margin-right: 5%;
      border-radius: 50%;
      background-color: var(--GREY);
      position: relative;
      .profile {
        position: absolute;
        width: 100%;
      }
    }
  }
  .msgWrapper {
    display: inline-block;
    width: 80%;
    .senderName {
      margin-bottom: 5px;
      font-size: 0.8em;
      color: #333;
    }
    .msg {
      display: inline-block;
      max-width: 90%;
      background-color: var(--GREY);
      padding: 10px;
      border-radius: 5px;
      font-size: 0.9em;
      line-height: 1.2;
      color: #333;
    }
  }
`;

export const Sender = ({ profile, alias, msg }) => {
  return (
    <SenderComp>
      <div className="profileWrap">
        <div className="profileBox">
          <img src={`${profile}`} alt="" className="profile" />
        </div>
      </div>
      <div className="msgWrapper">
        <div className="senderName">{alias}</div>
        <div className="msg">{msg}</div>
      </div>
    </SenderComp>
  );
};

const UserComp = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
  .msg {
    display: inline-block;
    max-width: 70%;
    background-color: var(--GREY);
    padding: 10px;
    border-radius: 5px;
    font-size: 0.9em;
    line-height: 1.2;
    color: #333;
  }
`;
export const User = ({ msg }) => {
  return (
    <UserComp>
      <div className="msg">{msg}</div>
    </UserComp>
  );
};
