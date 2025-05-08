import React, { memo } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./router/routes";

const App = memo(() => {
  request
    .get({
      url: "/home/discount",
    })
    .then((res) => {
      console.log("res: ", res);
    });

  return (
    <div>
      <div className="header">header</div>
      <div className="pages">{useRoutes(routes)}</div>
      <div className="footer">footer</div>
    </div>
  );
});

export default App;
