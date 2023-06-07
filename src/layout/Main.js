import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Outlet } from 'react-router-dom';
import News from '../Pages/News/News/News';
import Footer from '../Shared/Footer/Footer/Footer';
import Header from '../Shared/Header/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block ' ><LeftSideNav></LeftSideNav></Col>
                    <Col lg="7"><Outlet></Outlet></Col>
                    <Col lg="3" className='d-none d-lg-block lg-2'><RightSideNav></RightSideNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;