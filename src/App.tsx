/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from "react";
import ComplexStructure from "./ComplexStructure";
interface IExampleContext {
  activeTheme: string;
}
interface IExampleAction {
  type: string;
  payload: string;
}

const reducer = (
  state: IExampleContext,
  action: IExampleAction
): IExampleContext => {
  switch (action.type) {
    case "changeTheme":
      if (action.payload !== state.activeTheme) {
        return {
          activeTheme: action.payload,
        };
      }
      return state;
    default:
      return state;
  }
};

export const ThemeContext = React.createContext<{
  state: IExampleContext;
  dispatch: React.Dispatch<IExampleAction>;
}>({
  state: { activeTheme: "light" },
  dispatch: () => {},
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, { activeTheme: "light" });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ComplexStructure />
    </ThemeContext.Provider>
  );
};

export default App;
