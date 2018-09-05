import React, { Component } from 'react';
import image1 from '../images/268x0w.png';
import image2 from '../images/download(1).jpg';
import image3 from '../images/download.jpg';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

class HomePage extends Component{

    render() {
        return (
            <div style={{ marginTop:'75px' }}>
                <Carousel infiniteLoop={true} showThumbs={false} showIndicators={false} className="container kucing">
                    <Link to="/hacksawridge"> 
                        <div className="merdeka">
                            <img src={image1} /> 
                            <p className="legend">Hacksaw Ridge</p>
                        </div> 
                    </Link>
                    <Link to="/avengers">
                        <div className="merdeka">
                            <img src={image2} />
                            <p className="legend">Avengers Infinity War</p>
                        </div>
                    </Link>
                    <Link to="/fallout">
                        <div className="merdeka">
                            <img src={image3} />
                            <p className="legend">Mission Impossible Fallout</p>
                        </div>
                    </Link>
                </Carousel>
            </div>
        );
    }
}

export default HomePage;