const Kiki = ({ data }) => {
  return (
    <div>
      <div>{data.roomName}</div>
      <div>{data.createdAt}</div>
    </div>
  );
};
export default Kiki;
