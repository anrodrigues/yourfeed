import React from "react"
import ContentLoader from "react-content-loader"

const HeaderTitleLoader = () => (
  <>
  <ContentLoader 
    speed={3}
    width={300}
    height={40}
    viewBox="0 0 300 40"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
 
  >
    <rect x="10" y="2" rx="3" ry="3" width="250" height="35" />
  </ContentLoader>

  <br/>
  </>
)

export default HeaderTitleLoader