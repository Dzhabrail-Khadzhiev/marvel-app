import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={370}
    height={300}
    viewBox="-50 -50 370 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="20" cy="20" r="20" />
    <rect x="542" y="233" rx="35" ry="0" width="135" height="35" />
    <rect x="54" y="10" rx="35" ry="0" width="352" height="20" />
    <rect x="0" y="53" rx="35" ry="0" width="416" height="43" />
    <rect x="1" y="118" rx="35" ry="0" width="416" height="43" />
    <rect x="2" y="178" rx="35" ry="0" width="416" height="43" />
  </ContentLoader>
);

export default MyLoader;
