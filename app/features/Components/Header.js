import React from 'react';
import logo from '../Agents/assets/logo.jpg';
import { Header } from './styles';

function header() {
  return (
    <Header>
      <div className="menu">
        <ul>
          <img src={logo} alt="logo" width={70} height={62} />
          <li>
            <a href="/">Agents</a>
          </li>
          <li>
            <a href="/maps">Maps</a>
          </li>
          <li>
            <a href="/weapons">Weapons</a>
          </li>
        </ul>
      </div>
    </Header>
  );
}

export default header;
