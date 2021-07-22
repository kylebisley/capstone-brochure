import React from 'react';
import { Space, Card } from 'antd';
import cubohLogo from './Resources/cuboh_dark.png';


class AboutSponsor extends React.Component {

    render() {
        return (
        <Space direction="vertical horizontal">
            <Card style={{padding: '1vh 1vw 1vh 1vw' }}>
                <h1>Project Sponsored by Cuboh</h1>
                <h2><a href="https://www.cuboh.com/" style={{color:'grey'}}>www.cuboh.com</a></h2>
                <Space style={{textAlign:'center' }} direction="vertical">
                    <a href="https://www.cuboh.com/">
                        <img src={cubohLogo} alt="Cuboh Logo" className="logo" style={{height:'25vh', width:'automatic' }} />
                    </a>
                    <br />
                    <p>Cuboh aggregates online orders from food delivery apps through a single device to greatly simplify restaurant’s workflows. The Menu Scraper project will generate a free evaluative report of a restaurant’s menu, as hosted by various food delivery apps. The report can then be leveraged to enhance the restaurant’s online presence. Additionally, the user’s email will be shared with Cuboh’s marketing department to help inform potential customers of other ways to improve their online experience.</p>
                    <h2>Special Thanks</h2>
                    <p>Team D would like to thank Cuboh, specifically Samreeta Kandola and Manny Pasquale for their continued support and presence. In addition we would like to thank Brandon and Juan for providing us this opportunity.</p>
                    <p>We would also like to thank our instructors Ben Leather, Jonas Bambi, Katie Tanigawa and Saryta Schaerer for their weekly check-ins, helpful direction, and kind words.</p>
                </Space>
            </Card>
        </Space>
        );
    }
}

export default AboutSponsor;