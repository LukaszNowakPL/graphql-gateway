import React, { Component } from "react";
import { Menu } from "./components/Menu/Menu";
import { MainRouter } from "./components/MainRouter/MainRouter";
import { css } from "emotion";

class App extends Component {
  render() {
    return (
      <>
        <Menu />
        <div className={appContainer}>
          <MainRouter />
        </div>
      </>
    );
  }
}

export default App;

const appContainer = css({
  padding: "16px 10% 0px"
});
