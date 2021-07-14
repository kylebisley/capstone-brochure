import React from 'react';
import { Space, Card } from 'antd';
import cubohLogo from './Resources/cuboh_dark.png';


class AboutSponsor extends React.Component {

    render() {
        return (
        <Space direction="vertical">
            <Card title="Project Sponsored by Cuboh" style={{ padding: '1vh 1vw 1vh 1vw' }}>
                <Space direction="horizontal">
                    <a href="https://www.cuboh.com/">
                        <img src={cubohLogo} alt="Cuboh Logo" className="logo" style={{height:'10vh', witdh:'automatic', float:'left' }} />
                    </a>
                    <Space direction="vertical">
                        <p>Cuboh aggregates online orders from food delivery apps through a single device to greatly simplify restaurant’s workflows. The Menu Scraper project will generate a free evaluative report of a restaurant’s menu, as hosted by various food delivery apps. The report can then be leveraged to enhance the restaurant’s online presence. Additionally, the user’s email will be shared with Cuboh’s marketing department to help inform potential customers of other ways to improve their online experience.</p>
                    </Space>
                </Space>
            </Card>
        </Space>
        );
    }
}

export default AboutSponsor;