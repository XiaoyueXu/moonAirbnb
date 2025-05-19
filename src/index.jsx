// 从第三方导入的内容
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

// 从本项目里导入的内容
import App from "@/App.jsx";
import "normalize.css";
import "./assets/css/index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Suspense fallback="loading">
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>
  // </React.StrictMode>
);
