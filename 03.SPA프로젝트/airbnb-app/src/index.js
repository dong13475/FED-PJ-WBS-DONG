// public/index.html 페이지에 적용되는 컴포넌트
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Layout from "./airbnb/Layout";
import Main from "./airbnb/Main";
import "./index.css";
import 리아드 from "./airbnb/리아드";

export default function App(){
  return(
    <HashRouter>
      <Routes>
        {/* 레이아웃 컴포넌트 루트로 잡기! */}
        <Route path="/" element={<Layout />}>
          {/* 하위라우트 셋팅 */}
          {/* path대신 index만 쓰면 첫페이지! 
          -> Layout의 Link to="/"에 해당하는 셋팅임 필수! */}
          <Route index element={<Main />} />
          <Route path="료칸" element={<Main />} />
          <Route path="리아드" element={<리아드 />} />
        </Route>
      </Routes>
    </HashRouter>
  )
  ;
} //////////////// App 컴포넌트 /////////////////

const root = ReactDOM.createRoot(
  document.getElementById("root"));
root.render(<App />);