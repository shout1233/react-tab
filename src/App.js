import React from "react";
import TabsList from "./components/layout/TabsList";
import PanelsList from "./components/layout/PanelsList";

const App = () => {
  return (
    <div className="tabs-view">
      <TabsList />
      <PanelsList />
    </div>
  );
};

export default App;
