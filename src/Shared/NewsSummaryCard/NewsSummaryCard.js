import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';


const NewsSummaryCard = ({ news }) => {
    console.log(news);

    const { author, details, image_url, title, _id } = news;
    return (
        <div className='mb-2'>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                            roundedCircle
                            className='me-4'
                            src={author.img}
                            style={{ height: '50px' }}
                        >
                        </Image>
                        <div className=''>
                            <p>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>



                    <div p-1>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>

                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 250 ? <p>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link> </p> :
                                details
                        }
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;