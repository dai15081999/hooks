import React, { useState, useRef } from "react";

const App = () => {
  return (
    <div>
      <input type="text" placeholder="image url" />
      <input type="text" placeholder="your name" />
      <input type="text" placeholder="your city" />
      <input type="text" placeholder="your position" />
      <button>set data</button>
      <div></div>
    </div>
  );
};

export default App;
