import React from 'react'
import "./Exploremenu.css"
import "./responsive-explore-menu.css"
import { menu_list } from '../../src/assets/assets'
function Exploremenu({category,setCategory}) {
  return (
    <div className='Explore-menu'>
        <h1>Explore Our Menu</h1>
        <div className="content-exploremenu">
            {menu_list.map((elem,index)=>{
                return <div onClick={()=>{setCategory(prev=>prev===elem.menu_name?"All":elem.menu_name)}} key={index} className="subcontent">
                    <img className={category===elem.menu_name?"activ":""} src={elem.menu_image} alt="" />
                    <p>{elem.menu_name}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Exploremenu
