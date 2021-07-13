import React from 'react';
import { Space, Card } from 'antd';
import cubohLogo from '../Resources/cuboh_light.png';



class AboutSponsor extends React.Component {

    render() {
        return (
        <Space direction="vertical horizontal">
            <Card title="Tate" style={{ padding: '1vh 1vw 1vh 1vw' }}>
                <Space direction="horizontal">
                    <img src={cubohLogo} alt="Thumbs Up Pipboy" className="logo" style={{height:'7vh', float:'left' }} />
                    <Space direction="vertical">
                        <p>Tate has been a Camosun student since 2015. During his time in the Camosun ICS program, he has learned fundamental programming practices, earned experience working as a web developer, and made excellent friends to enjoy it with. Tate enjoys working with front and back-end development. In his free time, Tate works on his professional development, home projects, and spends time with his family.</p>
                        <p>Card content</p>
                    </Space>
                </Space>
            </Card>
        </Space>
        );
    }
}

export default AboutSponsor;