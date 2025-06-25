// 从第三方导入的内容
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// 从本项目里导入的内容
import App from "@/App.jsx";
import "normalize.css";
import "./assets/css/index.less";
import { theme } from "./assets/theme";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback="loading">
      <HashRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HashRouter>
    </Suspense>
  </Provider>

  // </React.StrictMode>
);
