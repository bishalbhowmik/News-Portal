import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../../BrandCarousel/BrandCarousel';




const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant='outline-primary' className='mb-1'><FaGoogle></FaGoogle>  Login With Google</Button>
                <Button variant='outline-dark' ><FaGithub></FaGithub>  Login With Github</Button>
            </ButtonGroup>

            <div className='mt-3'>
                <h6>Find us on</h6>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaTwitch/>Twitch</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;