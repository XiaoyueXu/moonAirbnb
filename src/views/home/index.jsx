import React, { memo, useEffect, useState } from "react";
import request from "../../services";

const Home = memo(() => {
  const [homeData, setHomeData] = useState("");
  const [homeData1, setHomeData1] = useState("");
  useEffect(() => {
    request
      .get({
        url: "/home/discount",
      })
      .then((res) => {
        console.log("res: ", res);
        setHomeData(res.title);
        setHomeData1(res.subtitle);
      });
  }, []);
  return (
    <div>
      {homeData}
      {homeData1}
    </div>
  );
});

export default Home;
