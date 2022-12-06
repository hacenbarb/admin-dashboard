import React from 'react'
import {LineChart, Header} from "../../components"
const Line = () => {
  return (
    <div>
      <Header category="Chart" title="Inflation Rate"/>
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  )
}

export default Line