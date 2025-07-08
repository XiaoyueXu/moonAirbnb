import PropTypes from "prop-types";
import React, { memo, useState, useCallback, useEffect } from "react";

import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionList from "@/components/section-list";
import { SectionWrapperTwo } from "./style";

const SectionV2Wrapper = memo((props) => {
  //  从props中获取的数据
  const { sectionData } = props;

  // 定义内部的State
  //TODO: useState中括号的值，只有第一次渲染的时候才生效。后面只能通过setNAme触发
  // TODO: 因此，可以等sectionData确定有值了，再渲染该组件
  const [name, setName] = useState(Object.keys(sectionData.dest_list)[0]);

  // TODO: 这种做法会导致组件渲染3次。无数据时一次，接口返回数据时第二次，返回到数据后setName触发渲染第三次
  // useEffect(() => {
  //   setName(Object.keys(sectionData.dest_list)[0]);
  // }, [sectionData]);

  // 事件处理
  const tabClickHandler = useCallback(function (index, name) {
    setName(name);
  }, []);

  return (
    <SectionWrapperTwo>
      <SectionHeader
        title={sectionData?.title}
        subtitle={sectionData?.subtitle}
      />
      <SectionTabs
        tabTitles={sectionData?.dest_list && Object.keys(sectionData.dest_list)}
        tabClick={tabClickHandler}
      />
      <SectionList roomList={sectionData?.dest_list?.[name]} rowNum={3} />
    </SectionWrapperTwo>
  );
});

SectionV2Wrapper.propTypes = {
  sectionData: PropTypes.object,
};

export default SectionV2Wrapper;
