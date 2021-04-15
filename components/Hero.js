import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap'
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="section position-relative" id="hero">
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div className="mt-5 mt-lg-0 mb-3" >
              <Image
                src="/assets/namelogopng.png"
                layout="intrinsic"
                width={5000}
                height={1000}
              />

            </div>
          </Col>
        </Row>
      </Container>
      <div className=" intro ">
      <div className="heroContent" >

        <div className="heroImg">
          <Row className="align-items-center mt-5">
            <Col md={{ size: 4, offset: 3 }} className="mt-5 mb-5 mt-sm-0">
              <div>
                <img src="/assets/1.png" alt="" className="img-fluid d-block mx-auto" />
              </div>
            </Col>
          </Row>
        </div>
        <p className="text ">
          <h1 className="mb-4 font-weight-normal line-height-1_4">Say hello to <span className="darkSpan font-weight-medium">Bountifull.</span></h1>
          Bountifull tracks sixteen nutrients that are key to maintaining optimal mental and physical health.
        </p>
      </div>
      </div>
    </section>
  );
}
export default Hero;