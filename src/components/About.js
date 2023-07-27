import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function About(props) {
    const [myStyle, setmyStyle] = useState({
        color: "black",
        backgroundColor: "white",
    });
    const [btntext, setbtntext] = useState("Dark mode");
    let togglestyle = () => {
        if (myStyle.color === 'black') {
            setmyStyle({
                color: "white",
                backgroundColor: "black",
            })
            setbtntext('Light mode')
        } else {
            setmyStyle({
                color: "black",
                backgroundColor: "white",
            })
            setbtntext('Dark mode')
        }
    }
    return (
        <>
            <div className='container mt-5 p-5 border border-dark rounded mb-5' style={myStyle}>
                <h1 className=' text-center'>{props.About}</h1>
                <Accordion defaultActiveKey="0" style={myStyle}>
                    <Accordion.Item eventKey="0" style={myStyle}>
                        <Accordion.Header style={myStyle}>Item-1</Accordion.Header>
                        <Accordion.Body style={myStyle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header style={myStyle}>Item-2</Accordion.Header>
                        <Accordion.Body style={myStyle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header style={myStyle}>Item-1</Accordion.Header>
                        <Accordion.Body style={myStyle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className="btn btn-outline-success mt-3" onClick={togglestyle}>{btntext}</div>
            </div>
        </>
    )
}