import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";

import "./reset.css";
import "./common.css";
import { Provider } from "react-redux";
import store from "./redux/reduser/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/:id" element={<ListPage />}></Route>
      </Routes>
      </div>
    </Provider>
  );
}
