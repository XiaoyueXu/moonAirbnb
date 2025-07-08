import PropTypes from "prop-types";
import React, { memo, useState } from "react";

import { TabsWrapper } from "./style";
import classNames from "classnames";

const SectionTabs = memo((props) => {
  const { tabTitles, tabClick } = props;

  const [clickIndex, setClickIndex] = useState(0);

  const changeSelTab = (index, item) => {
    setClickIndex(index);
    tabClick(index, item);
  };

  return (
    <TabsWrapper>
      {tabTitles &&
        tabTitles.map((item, index) => {
          return (
            <div
              className={classNames("tab", { active: index === clickIndex })}
              onClick={(e) => changeSelTab(index, item)}
            >
              {item}
            </div>
          );
        })}
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabTitles: PropTypes.array,
};

export default SectionTabs;
