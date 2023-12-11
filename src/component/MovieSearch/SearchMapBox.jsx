import { styled } from "styled-components";

const SearchMapBoxStyle = styled.div`
  padding: 40px 0;
  outline: 1px solid red;
  .container {
    outline: 1px solid red;
    padding: 300px 0;
  }
`;
const SearchMapBox = () => {
  return (
    <SearchMapBoxStyle>
      <div className="container"></div>
    </SearchMapBoxStyle>
  );
};

export default SearchMapBox;
