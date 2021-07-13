import React from 'react';
import { Space, Card } from 'antd';
import ratings from '../Resources/cheesy_ratings_picture.png';


class AboutSponsor extends React.Component {

    render() {
        return (
        <Space direction="vertical horizontal">
            <Card title="Menu Report Application" style={{ padding: '1vh 1vw 1vh 1vw' }}>
                <Space direction="horizontal">
                    <img src={ratings} alt="Dial guage from bad to good" style={{height:'25vh', witdh:'automatic', float:'left' }} />
                    <Space direction="vertical">
                        <p>Cuboh requires a website that will collect marketing leads on restaurants that use online food ordering platforms. Specifically, this website will attract restaurants with a presence on five of the largest online food ordering and delivery services: Uber Eats, Skip the Dishes, DoorDash, Grubhub and ChowNow. The application will generate feedback on a restaurant’s online menus by reading the websites and emailing a report to the restauranter. In addition, it will add the email address to a google spreadsheet as a potential lead for Cuboh’s marketing team. </p>
                        <p>The project will produce a website form which will accept URL’s to the aforementioned platforms and an email address. This information will be checked and processed to produce a report on the quality of the menu found at the provided URLs. The report will be emailed to the client and the email address will be appended to a google spreadsheet of leads for Cuboh’s marketing department.  </p>
                    </Space>
                </Space>
            </Card>
        </Space>
        );
    }
}

export default AboutSponsor;