import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Welcome from './Welcome.js';
import StandardMenu from './StandardMenu.js';
import AboutTeam from './AboutTeam.js';

import './index.css';
import logo from './Resources/thumbs-up-pip.png';
import AboutSponsor from './AboutSponsor.js';
import AboutProject from './AboutProject.js';
import AboutCapstone from './AboutCapstone.js';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: 'welcome',
    }
  }

  selectComponent(key) {
    this.setState({
      current: key
    })
  }



  render() {
    return(
      <Layout className="layout">
        <Header style={{ height: "7vh"}}>
            <div>
              <img src={logo} alt="Thumbs Up Pipboy" className="logo" style={{height:'7vh', float:'left' }} />
            </div>
          <StandardMenu current={this.state.current} selectComponent={this.selectComponent.bind(this)}/>
        </Header>
        <Content style={{ padding: '0 10vh', height: "calc(100vh - 10vh - 7vh)" }}>
          <Display current={this.state.current} />
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: "yellow", height: "10vh" }}>
          Just another footer. 
        </Footer>
      </Layout>
    );
  }

}

class Display extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tab: <Welcome />
    }
  }

  componentWillReceiveProps(nextProps) {
    switch(nextProps.current){
      case('welcome'):
      this.setState({
          tab: <Welcome />
        })
        break;
      case('AboutProject'):
      this.setState({
          tab: <Welcome />
        })
        break;
      case('AboutTeam'):
      this.setState({
          tab: <AboutTeam />
        })
        break;
        
      case('AboutSponsor'):
      this.setState({
          tab: <AboutSponsor />
        })
        break;
        
      case('AboutCapstone'):
      this.setState({
          tab: <AboutCapstone />
        })
        break;
        
      default:
        this.setState({
          tab: <Welcome />
        })
        break;
    }
  }

  render(){
    const {tab}  = this.state;

    return (
      <div>
        {tab}
      </div>
      
    );
  }

}
const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


