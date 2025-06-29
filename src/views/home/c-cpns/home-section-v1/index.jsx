import PropTypes from "prop-types";
import React, { memo } from "react";

import SectionHeader from "@/components/section-header";
import SectionList from "@/components/section-list";
import { SectionWrapper } from "./style";

const SectionV1Wrapper = memo((props) => {
  const { sectionData } = props;

  return (
    <SectionWrapper>
      <SectionHeader
        title={sectionData.title}
        subTitle={sectionData.subTitle}
      />
      {sectionData?.list && (
        <SectionList roomList={sectionData.list.slice(0, 8)} />
      )}
    </SectionWrapper>
  );
});

SectionV1Wrapper.propTypes = {
  sectionData: PropTypes.object,
};

export default SectionV1Wrapper;
