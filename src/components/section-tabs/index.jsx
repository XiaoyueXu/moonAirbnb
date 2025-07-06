import PropTypes from "prop-types";
import React, { memo } from "react";

import { TabsWrapper } from "./style";

const SectionTabs = memo((props) => {
  const { tabTitles } = props;
  return (
    <TabsWrapper>
      {tabTitles &&
        tabTitles.map((item) => {
          return <div className="tab">{item}</div>;
        })}
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabTitles: PropTypes.array,
};

export default SectionTabs;
