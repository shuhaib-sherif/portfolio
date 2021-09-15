import React from 'react'

function NavItem({value, handlerFilterCategory, active}) {

  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";
    return (
       
        <li className={className} onClick={() => handlerFilterCategory(value)}>
        {value}
      </li>
    )
}

export default NavItem
