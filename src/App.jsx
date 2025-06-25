import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/routes";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

const App = memo(() => {
  return (
    <div>
      <div className="header">
        <AppHeader />
      </div>
      <div className="pages">{useRoutes(routes)}</div>
      <div className="footer">
        <AppFooter />
      </div>
    </div>
  );
});

export default App;
