import React from 'react';
import { Space, Card } from 'antd';
import camosun from './Resources/camosun_logo.svg';


class AboutCapstone extends React.Component {

    render() {
        return (
        <Space direction="vertical horizontal">
            <Card style={{padding: '1vh 1vw 1vh 1vw' }}>
                <h1>Capstone</h1>
                <h2>What is Capstone?</h2>
                <Space style={{textAlign:'center' }} direction="vertical">
                    <img  src={camosun} alt="Camosun Logo" style={{height:'25vh', width:'automatic', justifyContent:'center' }} />
                    <br />
                    <p style={{textAlign:'left' }}>The Camosun College Computer Science Programs are designed to foster professional software developers, analysts and support technologists. Through the Capstone Project process, students work directly with an industry sponsor to solidify their knowledge and expertise in the area of software application development.</p>
                    <p style={{textAlign:'left' }}>Over a period of four months, second-year students work in teams analyzing, designing, and implementing a software solution of a project proposed by a variety of organizations. At the end of the term, the student teams present their projects at the Capstone Symposium, a formal trade show for the community. Students may work off-site, at sponsor organizations, during the project. This year it has been held 100% remote.</p>
                </Space>
            </Card>
        </Space>
        );
    }
}

export default AboutCapstone;