import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"
;
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;



//Which components should hold state? 
//Which components need access to that state?
//How can we update state in one component from a child component?

//For info to propagate down the component tree, parents pass props to their children
//For info to propagate up the component tree, we invoke callbacks that were passed from parents to children as props
//Components of the same level (siblings) cannot communicate directly
//We can only communicate up and down the component tree
//So if multiple components need to share the same info, that state should live in the parent component (or a more general ancestor)