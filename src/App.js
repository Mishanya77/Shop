import React from "react";
import SideBar from "./components/sideBar/SideBar";
import css from "./App.module.css";
import Header from "./components/header/Header";
import Container from "./components/container/Container";
import { Switch, NavLink, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";

const App = () => {
  return (
    <div className={css.app}>
      <SideBar />
      <div className={css.mainBlock}>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/catalog" component={CatalogPage} />
          </Switch>
        </Container>
      </div>
    </div>
  );
};

export default App;
