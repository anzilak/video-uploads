import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {

    // use navigate is a hook
    const navigate = useNavigate()

    const handleNavigate = () => {
        // navigate to home
        navigate('/home')
    }

    return (
        <div>
            <Row className='align-item-center'>

                <Col></Col>
                <Col lg={6}>
                    <h1>Welcome to Videoooooo.com</h1>
                    <p style={{ textAlign: "justify" }}>When user can use their favourite videos. User can upload any youtube videos by copy and paste their url. Videoooooo.com will allow to add and remove their uploaded videos and also arrange them in different categories by drag and drop. It is free try it now</p>
                    <button onClick={handleNavigate} className='btn btn-primary'>Click here to know more</button>
                </Col>

                <Col lg={4}>
                    <img className='img-fluid' src="https://cdn.shopify.com/app-store/listing_images/119e46d40447b213e034117eaa5a9382/icon/CLWd5bj0lu8CEAE=.png" alt="no image" />
                </Col>

                <Col></Col>

            </Row>
        </div>
    )
}

export default Landingpage
