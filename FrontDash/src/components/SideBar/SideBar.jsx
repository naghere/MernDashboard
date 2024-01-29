import React from "react";
import "./sideBar.css";
import { IoIosCalendar } from "react-icons/io";
import { FiActivity } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";

export const SideBar = () => {
  return (
    <div className="sideBar">
      <div>
        <div className="perfil">
          <img
            src="https://avatars.githubusercontent.com/u/99615871?v=4"
            alt="perfil"
          />
          <div className="nameP">
            <p>Olá João</p>
          </div>
        </div>

        <div className="pagseAside">
            <div className="title-content">
                <h3>Páginas</h3>
            </div>
          

          <div className="contentPages">
            <div className="page-link">
                <div className="icon-nav">
                   <IoIosCalendar /> 
                </div>
              <p>Calendário</p>
            </div>

            <div className="page-link">
            <div className="icon-nav">
              <FiActivity />
              </div>
              <p>Ver Atividades</p>
            </div>

            <div className="page-link">
            <div className="icon-nav">
              <FaCircleUser />
              </div>
              <p>Perfil</p>
            </div>
            <div className="logOut">
              <div className="page-link">
              <div className="icon-nav">
              <IoLogOutOutline />
              </div>
                <p>Sair</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
