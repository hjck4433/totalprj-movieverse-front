const Kiki = ({ data }) => {
  return (
    <div className="chatBox">
      <div className="title">{data.roomName}</div>
      <div className="createdAt">{data.createdAt}</div> 
    </div>
  
  );
};
export default Kiki;
