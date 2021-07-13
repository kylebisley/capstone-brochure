import React from 'react';
import { Space, Card } from 'antd';
import camosun from '../Resources/camosun_logo.png';


class AboutCapstone extends React.Component {

    render() {
        return (
        <Space direction="vertical horizontal">
            <Card title="Menu Report Application" style={{ padding: '1vh 1vw 1vh 1vw' }}>
                <Space direction="vertical">
                    <img src={camosun} alt="Camosun Logo" style={{height:'25vh', witdh:'automatic', float:'left' }} />
                    <p>The Camosun College Computer Science Programs are designed to foster professional software developers, analysts and support technologists. Through the Capstone Project process, students work directly with an industry sponsor to solidify their knowledge and expertise in the area of software application development.</p>
                    <p>Over a period of four months, our second-year students work in teams analyzing, designing, and implementing a software solution of a project proposed by a variety of organizations. At the end of the term, the student teams present their projects at the Capstone Symposium, a formal tradeshow for the community. Students may work off-site, at your organization, during the project.</p>
                </Space>
            </Card>
        </Space>
        );
    }
}

export default AboutCapstone;