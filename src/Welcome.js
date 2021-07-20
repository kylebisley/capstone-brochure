import React from 'react';
import { Space, Card } from 'antd';

class Welcome extends React.Component {

    render() {
        return (
            <Space direction="vertical ">
                <Card style={{padding: '1vh 1vw 1vh 1vw' }}>
                    <h1>Welcome</h1>
                    <h2>What is Capstone?</h2>
                    <Space style={{textAlign:'left' }} direction="vertical">
                        <h3>We're Capstone Team D, also know as Team Cuboh</h3>
                        <p>You've found our brochure website for Capstone 2021.</p>
                        <p>This project was commissioned by Cuboh Inc. to create an application that would allow restaurants to get useful feedback on the quality of their online menus as hosted by various food ordering platforms.</p>
                        <p>Cuboh asked for a website that will collect marketing leads on local restaurants who maintain a presence in online food ordering platforms. Specifically, this website should attract restaurants with a presence on the big five platforms: Uber Eats, Skip the Dishes, Door Dash Grubhub and Chow Now. The application will generate feedback on a restaurant’s online menu by scraping the websites and emailing a report to the local restaurateur. In addition, it will send the email address to the Cuboh marketing team as sales leads.</p>
                    </Space>
                </Card>
            </Space>
        );
    }
}

export default Welcome;
