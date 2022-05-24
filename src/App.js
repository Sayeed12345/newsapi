import React from "react";
import { NewsContextProvider } from "./NewsContext";

function App(){
  return (
    <NewsContextProvider>
      <div>Hello from app</div>
    </NewsContextProvider>
  );
}
export default App;