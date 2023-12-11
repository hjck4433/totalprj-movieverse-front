const Kiki = ({ data }) => {
  return (
    <div className="chatBox">
      <div className="p1">{data.roomName}</div>
      <div className="p2">{data.createdAt}</div> 
      <div>
    </div>
    </div>
  
  );
};
export default Kiki;


/*여기에 클래스네임 주면 채팅 리스트의 텍스트 부분 수정할 수 있음 */