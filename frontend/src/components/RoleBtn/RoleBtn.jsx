import React from 'react'

const RoleBtn = ({btns}) => {
  return (
    <div>
      <a href={`${btns.link}`}>{btns.btnName}</a>
    </div>
  )
}

export default RoleBtn
