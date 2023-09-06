import { styled } from "styled-components";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Head = styled.div`
  border: 10px solid black;
  height: 15vh;
`;
const Body = styled.div`
  border: 10px solid blue;
  height: 75vh;
`;
const Foot = styled.div`
  border: 10px solid black;
  height: 10vh;
`;

function Home() {
  return (
    <>
      <Head>
        <Header />
      </Head>
      <Body>
        <Main />
      </Body>
      <Foot>
        <Footer />
      </Foot>
    </>
  );
}
export default Home;
