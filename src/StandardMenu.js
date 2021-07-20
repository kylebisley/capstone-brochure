import React from 'react';
import { Menu } from 'antd';
import { FundViewOutlined, ThunderboltOutlined, MergeCellsOutlined, StarOutlined, TeamOutlined } from '@ant-design/icons';


class StandardMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        current: this.props.current
      }
    }


    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
        this.props.selectComponent(e.key);
    };

    render() {
        const { current } = this.state;
        return (
            <Menu theme="dark" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="welcome" icon={<ThunderboltOutlined />}>
                    Welcome
                </Menu.Item>
                <Menu.Item key="AboutProject" icon={<FundViewOutlined />}>
                    About the Menu Reports Application
                </Menu.Item>
                <Menu.Item key="AboutTeam" icon={<TeamOutlined />}>
                    About the Team
                </Menu.Item>
                <Menu.Item key="AboutSponsor" icon={<StarOutlined />}>
                    About the Sponsor
                </Menu.Item>
                <Menu.Item key="AboutCapstone" icon={<MergeCellsOutlined />}>
                    About Camosun Capstone
                </Menu.Item>
            </Menu>
        );
    }
}

export default StandardMenu;
