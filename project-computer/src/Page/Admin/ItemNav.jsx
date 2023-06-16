import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const ItemNav = () => {
  return (
    <div className="itemt">
            <a href className="itemt-nav-addEvent">
              <div>
                 <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
              </div>
              <p>DashBoard</p>
              <i className="fas fa-angle-right" />
            </a>
            <div className="sub-menu">
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
