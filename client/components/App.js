import React from "react";
import Header from "./Header";

const App = ({ Children }) => (
  <div>
    <Header />
    {Children}
  </div>
);

export default App;
