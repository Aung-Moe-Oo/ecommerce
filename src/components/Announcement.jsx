import styled from "styled-components";

const Container = styled.div`
  /* top: 58px;
  width: 100%;
  left: 0;
  position: fixed;
  z-index: 10; */

  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>Super Deal! Free shipping on orders over $50</Container>;
};

export default Announcement;
