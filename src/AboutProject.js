import React from 'react';
import { Space, Card } from 'antd';
import ratings from './Resources/cheesy_ratings_picture.jpg';
import SupportedPlatformList from './SupportedPlatformsList';

class AboutSponsor extends React.Component {

    render() {
        return (
        <Space direction="vertical horizontal">
            <Card style={{textAlign:'center', padding: '1vh 1vw 1vh 1vw' }}>
                <h1>Menu Report Application</h1>
                <h2>What is it and what does it do?</h2>
                <Space direction="vertical">
                    <img src={ratings} alt="Dial gauge from bad to good" style={{ height:'25vh', width:'automatic', float:'center' }} />
                    <br />
                    <p>Cuboh requires a website that will collect marketing leads on restaurants that use online food ordering platforms. Specifically, this website is to attract restaurants with a presence on five of the largest online food ordering and delivery services: Uber Eats, Skip the Dishes, DoorDash, Grubhub, and ChowNow. The application generates feedback on a restaurant’s online menus by reading the websites and emailing a report to the restaurateur. In addition, it adds the email address to a google spreadsheet as a potential lead for Cuboh’s marketing team. </p>
                    <p>The application provides a web form which accepts URLs to to menus and an email address where the report will be delivered. This information is checked and processed to produce a report on the quality of the menu found at the URLs. The report is emailed to the client and the email address will be appended to a Google spreadsheet of leads for Cuboh’s marketing department.  </p>
                </Space>
            </Card>
            <SupportedPlatformList />
        </Space>
        );
    }
}

export default AboutSponsor;
