import PropTypes from "prop-types";
import React, { memo } from "react";

import { TabsWrapper } from "./style";

const SectionTabs = memo((props) => {
  return <TabsWrapper>SectionTabs</TabsWrapper>;
});

SectionTabs.propTypes = {
  tabTitles: PropTypes.array
};

export default SectionTabs;
