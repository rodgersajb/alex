import { Aside } from "./components/Aside";
import { GlobalStyle } from "./components/globalStyles";


import styled from "styled-components";




function App() {
  return (
    <>
      <GlobalStyle />
      <Grid />
        <Aside />
        <Header>MovieDB</Header>
      <Grid />
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(10%, auto) auto;
  grid-template-rows: 1fr;
`;

const Header = styled.h1`
  grid-column: 2 / 3; /* Ensure the header spans the second grid column */
  align-self: center; /* Vertically center the header within its grid cell */
  justify-self: start; /* Align the header to the start of its grid cell */
  margin-left: 20px; /* Add left margin for spacing */
  font-size: 2rem; /* Adjust font size as needed */
  color: #333; /* Example text color */
`;




export default App;

