import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box w="full" h="full">
      <HomePage></HomePage>
    </Box>
  );
}

export default App;
