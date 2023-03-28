import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="goldenrod">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="tomato">
          side
        </GridItem>
      </Show>
      <GridItem area="main" bg="green">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
