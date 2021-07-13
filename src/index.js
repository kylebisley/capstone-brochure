import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Welcome from './Welcome.js';
import StandardMenu from './StandardMenu.js';
import reportWebVitals from './reportWebVitals';
import './index.css'

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <StandardMenu />
      </Header>
      <Content style={{ padding: '0 10vh' }}>
        <Welcome />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Just another footer. 
      </Footer>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

