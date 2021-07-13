import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Welcome from './Welcome.js';
import StandardMenu from './StandardMenu.js';
import AboutTeam from './AboutTeam.js';

import './index.css';
import logo from './Resources/thumbs-up-pip.png';

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <Layout className="layout">
      <Header style={{ height: "7vh"}}>
          <div>
            <img src={logo} alt="Thumbs Up Pipboy" className="logo" style={{height:'7vh', float:'left' }} />
          </div>
        <StandardMenu />
      </Header>
      <Content style={{ padding: '0 10vh', height: "calc(100vh - 10vh - 7vh)" }}>
        <AboutTeam />
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: "yellow", height: "10vh" }}>
        Just another footer. 
      </Footer>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);


