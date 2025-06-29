import PropTypes from "prop-types";
import React, { memo } from "react";

import SectionHeader from "@/components/section-header";
import SectionList from "@/components/section-list";
import { SectionWrapper } from "./style";

const SectionV1Wrapper = memo((props) => {
  const { sectionData, rowNum = 4 } = props;

  return (
    <SectionWrapper>
      <SectionHeader
        title={sectionData.title}
        subtitle={sectionData.subtitle}
      />
      {sectionData?.list && (
        <SectionList rowNum={rowNum} roomList={sectionData.list.slice(0, 8)} />
      )}
    </SectionWrapper>
  );
});

SectionV1Wrapper.propTypes = {
  rowNum: PropTypes.number,
  sectionData: PropTypes.object,
};

export default SectionV1Wrapper;
