// public/index.html 페이지에 적용되는 컴포넌트
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Layout from "./airbnb/Layout";
import Main from "./airbnb/Main";
import ItemDetail from "./airbnb/modules/ItemDetail";
import "./index.css";
import ImgDetail from './airbnb/modules/ImgDetail';
import Airplane from "./airbnb/modules/Airplane";

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
          <Route path="료칸" element={<Main sub='료칸'/>} />
          <Route path="리아드" element={<Main sub='리아드'/>} />
          <Route path="북극" element={<Main sub='북극'/>} />
          <Route path="사막" element={<Main sub='사막'/>} />
          <Route path="상징적도시" element={<Main sub='상징적도시'/>} />
          <Route path="섬" element={<Main sub='섬'/>} />
          <Route path="세상의꼭대기" element={<Main sub='세상의꼭대기'/>} />
          <Route path="캐슬" element={<Main sub='캐슬'/>} />
          <Route path="키클라데스주택" element={<Main sub='키클라데스주택'/>} />
          <Route path="한옥" element={<Main sub='한옥'/>} />
          <Route path="여행은살아보는거야" element={<ItemDetail />} />
          <Route path="에어비앤비" element={<ImgDetail />} />
          <Route path="air" element={<Airplane />} />
          <Route path="자연" element={<Main sub='자연' />} />
          <Route path="건축" element={<Main sub='건축' />} />
        </Route>
      </Routes>
    </HashRouter>
  )
  ;
} //////////////// App 컴포넌트 /////////////////

const root = ReactDOM.createRoot(
  document.getElementById("root"));
root.render(<App />);