import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

function ButtonLoading({ widthLoader }) {
  return (
    <LoaderContainer>
      <ThreeDots color="#FFFFFF" height={"80px"} width={ widthLoader } />
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default ButtonLoading;