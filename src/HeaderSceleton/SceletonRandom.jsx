import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={575}
    height={300}
    viewBox="-40 0 550 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="576" y="360" rx="3" ry="3" width="67" height="330" />
    <rect x="488" y="364" rx="3" ry="3" width="140" height="11" />
    <rect x="583" y="373" rx="3" ry="3" width="53" height="11" />
    <rect x="533" y="362" rx="3" ry="3" width="72" height="11" />
    <rect x="529" y="364" rx="3" ry="3" width="100" height="11" />
    <rect x="574" y="367" rx="3" ry="3" width="37" height="11" />
    <rect x="538" y="374" rx="3" ry="3" width="140" height="11" />
    <rect x="476" y="359" rx="3" ry="3" width="173" height="11" />
    <circle cx="584" cy="379" r="27" />
    <rect x="5" y="36" rx="0" ry="0" width="208" height="188" />
    <rect x="253" y="41" rx="0" ry="0" width="114" height="28" />
    <rect x="247" y="94" rx="0" ry="0" width="232" height="79" />
    <rect x="560" y="356" rx="0" ry="0" width="35" height="17" />
    <rect x="289" y="214" rx="0" ry="0" width="15" height="3" />
    <rect x="254" y="196" rx="0" ry="0" width="92" height="22" />
    <rect x="370" y="195" rx="0" ry="0" width="92" height="22" />
  </ContentLoader>
);

export default MyLoader;
