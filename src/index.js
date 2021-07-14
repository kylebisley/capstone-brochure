import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Welcome from './Welcome.js';
import StandardMenu from './StandardMenu.js';
import './index.css';
import logo from './thumbs-up-pip.png';

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
    switch(this.props.current){
      case('welcome'):
        this.state = {
          tab: <Welcome />
        }
        break;
      case('AboutProject'):
        this.state = {
          tab: <Welcome />
        }
        break;
      case('AboutTeam'):
        this.state = {
          tab: <Welcome />
        }
        break;
        
      case('AboutSponsor'):
        this.state = {
          tab: <Welcome />
        }
        break;
        
      case('AboutCapstone'):
        this.state = {
          tab: <Welcome />
        }
        break;
        
      default:
        this.state = {
          tab: <Welcome />
        }
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


