import React from 'react'
import ContentLoader from 'react-content-loader'

const ProductLoader = props => (
  <ContentLoader viewBox="0 0 400 280" width={300} className="w-1/3 p-3" {...props}>
    <rect x="3" y="3" rx="10" ry="10" height="200" width="400" />
    <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
    <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />

  </ContentLoader>
)

export default ProductLoader