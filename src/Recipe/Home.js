import { Carousel } from 'react-bootstrap';

import Image1 from '../image/Group 1.png';
import Image2 from '../image/Group 2.png';
import Image3 from '../image/Group 3.png';

function Home(){
    return(
        <div>
            <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={Image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={Image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home;