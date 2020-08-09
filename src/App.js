import React from "react";
import { useEffect } from "react";
import Main from "./layout/container/Main";
import Loading from "./common/loading/Loading";

const App = () => {
  useEffect(() => {
    const bodyEl = document.getElementsByTagName("body")[0];
    const loadingEl = document.getElementById("init-loading");
    bodyEl.removeChild(loadingEl);
  }, []);
  return (
    <>
      <Main />
      <Loading />
    </>
  );
};

export default App;
