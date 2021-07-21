import React from 'react';
import { Space, Card } from 'antd';
import App_preview from './Resources/App_Preview.mp4';

class Welcome extends React.Component {

    render() {
        return (
            <Space direction="vertical ">
                <Card style={{padding: '1vh 1vw 1vh 1vw' }}>
                <Space direction="horizontal">
                    <div style={{width: '30vw'}}>
                        <h1>Welcome</h1>
                        <h2>Opening Sequence</h2>
                        <Space style={{textAlign:'left' }} direction="vertical">
                            <h3>We're Capstone Team D, also know as Team Cuboh</h3>
                            <p>You've found our brochure website for Capstone 2021.</p>
                            <p>Team Cuboh’s project was commissioned by Cuboh Inc. to create an application to provide restaurants useful feedback on their online menus hosted on food ordering platforms. It is a react website with a flask backend API. The project is presently on schedule for a successful, timely, delivery.</p>
                        </Space>
                    </div>
                    <Space style={{textAlign:'left' }} direction="vertical">
                        <figure>
                            <video loop muted autoPlay height="500px" style={{float:'right'}} >
                                <source src={App_preview} type="video/mp4" />
                            </video>
                            <figcaption>
                                Figure 1: A demonstration of our application.
                            </figcaption>
                        </figure>
                    </Space>
                </Space>
                <Space style={{textAlign:'left' }} direction="horizontal">
                    <Space style={{textAlign:'left' }} direction="vertical">
                        <h3>What does the Menu Scraper App do? </h3>
                        <p>Cuboh asked for a website that will collect marketing leads on local restaurants who maintain a presence in online food ordering platforms. Specifically, this website should attract restaurants with a presence on the big five platforms: Uber Eats, Skip the Dishes, Door Dash Grubhub and Chow Now. The application will generate feedback on a restaurant’s online menu by scraping the websites and emailing a report to the local restaurateur. In addition, it will send the email address to the Cuboh marketing team as sales leads.</p>
                    </Space>
                </Space>
                </Card>
            </Space>
        );
    }
}

export default Welcome;
