"use client"

import { Triangle } from "react-loader-spinner"

const Loading = () => {
  return (
    <div className="spinner">
      <Triangle
        height="150"
        width="150"
        color="#1d4ed8"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  )
}

export default Loading
