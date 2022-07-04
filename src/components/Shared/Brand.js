import styled from "styled-components";

function Brand() {
  return (
    <BrandName>MyWallet</BrandName>
  );
}

const BrandName = styled.h1`
  margin-top: 20px;
  font-family: 'Saira Stencil One', cursive;
  font-size: 32px;
`;

export default Brand;