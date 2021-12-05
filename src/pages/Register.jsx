import styled from "styled-components";
// import bgPhoto from "../components/img/bg2.jpg";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.274),
      rgba(255, 255, 255, 0.151)
    ),
    url("https://i.ibb.co/sqnYc78/bg2.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.205);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.288);
  backdrop-filter: blur(1px);
  border-radius: 5px;

  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;

  background-color: rgba(255, 255, 255, 0.205);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.288);
  border: none;

  &::placeholder {
    font-weight: 800;
  }
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  cursor: pointer;
  padding: 15px 20px;
  color: #000;
  text-transform: uppercase;
  transition: 0.3s ease;

  background-color: rgba(255, 255, 255, 0.205);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.288);
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="User Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordence with the <b>PRIVACY POLICY.</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
