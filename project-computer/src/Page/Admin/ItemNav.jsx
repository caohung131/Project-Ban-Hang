import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const ItemNav = () => {
  const [subMenuOpen, setSubMenuOpen] = useState('')

  // useEffect( ()=> {
  //   handleOnclickShowSubMenu()
  // }, [subMenuOpen])


  const handleOnclickShowSubMenu = () => {
    (subMenuOpen === 1) ? setSubMenuOpen('') : setSubMenuOpen(1)
  } 

  return (
    <div className="itemt">
      
            <a href className="itemt-nav-addEvent" onClick={handleOnclickShowSubMenu}>
              <div>
                 <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
              </div>
              <p>DashBoard</p>
              <i className="fas fa-angle-right" />
            </a>
          <div className={`sub-menu ${subMenuOpen === 1 ? "show" : ""}`}>
              <a href="#">Ecommerce</a>
              <a href="#">
                <p>Analytics</p>
                <p>new</p>
              </a>
            </div>
          </div>
  )
}

export default ItemNav
