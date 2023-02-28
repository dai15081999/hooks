import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "setImage") {
    return { ...state, image: action.data };
  } else if (action.type === "setName") {
    return { ...state, name: action.data };
  } else if (action.type === "setCity") {
    return { ...state, city: action.data };
  } else if (action.type === "setPosition") {
    return { ...state, position: action.data };
  } else if (action.type === "setArray") {
    return { ...state, dataArray: [...state.dataArray,...action.data] };
  } else {
    return state;
  }
};

const App = () => {
  const [state, setState] = useReducer(reducer, {
    name: "",
    image: "",
    city: "",
    position: "",
    dataArray: [],
  });
  console.log(state);
  return (
    <div>
      <input
        type="text"
        value={state.image}
        onChange={(e) =>
          setState({
            type: "setImage",
            data: e.target.value,
          })
        }
        placeholder="image url"
      />
      <input
        type="text"
        onChange={(e) =>
          setState({
            type: "setName",
            data: e.target.value,
          })
        }
        value={state.name}
        placeholder="your name"
      />
      <input
        type="text"
        onChange={(e) =>
          setState({
            type: "setCity",
            data: e.target.value,
          })
        }
        value={state.city}
        placeholder="your city"
      />
      <input
        type="text"
        onChange={(e) =>
          setState({
            type: "setPosition",
            data: e.target.value,
          })
        }
        value={state.position}
        placeholder="your position"
      />
      <button
        onClick={() =>
          setState({
            type: "setArray",
            data: {
              image: state.image,
              name: state.name,
              city: state.city,
              position: state.position,
            },
          })
        }
      >
        set data
      </button>
      <div></div>
    </div>
  );
};

export default App;
