import React from 'react'
import SearchBox from '../molecules/SearchBox'

const HeaderComponents = () => {
  return (
    <div style={{backgroundColor: "black",
    opacity: "0.7", width: "100%",  position: "fixed", top: 0, left: 0, zIndex: 100 }}>
      <SearchBox />
    </div>
    )
}

export default HeaderComponents