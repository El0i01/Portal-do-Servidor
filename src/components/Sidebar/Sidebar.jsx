import React, { useState } from "react";
import './Sidebar.css';
import Dashborard from "../../imgs/1.png";
import Requerimentos from "../../imgs/2.png";
import Eventos from "../../imgs/3.png";
import Configuração from "../../imgs/4.png";
import Sair from "../../imgs/5.png";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { id: 0, label: "Dashborard", icon: Dashborard },
    { id: 1, label: "Requerimentos", icon: Requerimentos },
    { id: 2, label: "Eventos", icon: Eventos },
    { id: 3, label: "Configuração", icon: Configuração },
  ];

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="Sidebar"> 
      <div className="logo"> 
        <b>Portal do Servidor</b>
        <div className="logo2">Bem Vindo ao Portal do Servidor</div>
      </div>

      <div className="menu"> 
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className={`menuItem ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleMenuClick(index)}
          >
            <div className="icon">
              <img src={item.icon} alt={`Logo do ${item.label}`} />
            </div>
            <span>{item.label}</span>
          </div>
        ))}
         <div className="sair">
            <img src={Sair} alt="Logo do Sair" /> 
         </div>
      </div>
    </div>
  );
}

export default Sidebar;
