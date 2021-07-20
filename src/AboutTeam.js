import React from 'react';
import { Space, Card } from 'antd';
import tate from './Resources/Tate.jpg';
import kyle from './Resources/Kyle.jpg';




class AboutTeam extends React.Component {

    render() {
        return (
            <Space direction="vertical horizontal">
                <Card style={{ padding: '1vh 1vw 1vh 1vw' }}>
                <h1>Our Team</h1>
                <h2>Behold our mighty team</h2>
                <Card title="Tate" style={{ background: '#f5f5', margin: '1vh 1vw 1vh 1vw', padding: '1vh 1vw 1vh 1vw' }}>
                    <Space direction="horizontal">
                        <img src={tate} alt="Thumbs Up Pipboy" className="logo" style={{height:'25vh', float:'left' }} />
                        <Space direction="vertical">
                            <p>Tate has been a Camosun student since 2015. During his time in the Camosun ICS program, he has learned fundamental programming practices, earned experience working as a web developer, and made excellent friends to enjoy it with. Tate enjoys working with front and back-end development. In his free time, Tate works on his professional development, home projects, and spends time with his family.</p>
                        </Space>
                    </Space>
                </Card>
                <Card title="Kyle" style={{ background: '#f5f5', margin: '1vh 1vw 1vh 1vw', padding: '1vh 1vw 1vh 1vw' }}>
                <Space direction="horizontal">
                    <img src={kyle} alt="Thumbs Up Pipboy" className="logo" style={{height:'25vh', float:'left' }} />
                    <Space direction="vertical">
                        <p>Kyle has a passion for collaboration, organization and design. His philosophy is careful documentation and mindful design are necessary conditions for a good codebase. Kyle’s previously worked in database design and website modernization for another local start up. Previously, he built an online scraper, nicknamed Boptimus Prime, using some of the same tools and libraries as on the Menu Scraper project. </p>
                    </Space>
                </Space>
                </Card>
                </Card>
            </Space>
        );
    }
}

export default AboutTeam;