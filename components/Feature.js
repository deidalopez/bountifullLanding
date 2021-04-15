import React, { useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player';

const FeatureBox = (props) => {
  return (
    <>
      {
        props.features.map((feature, key) =>
          (feature.id % 2 === 0) ?
            <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
              <Col md={5} >
                <div>
                  <img src={feature.img} alt="" className="img-fluid d-block mx-auto" />
                </div>
              </Col>
              <Col md={{ size: 6, offset: 1 }}>
                <div className="mt-5 mt-sm-0 mb-4">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="darkblueText font-weight-normal mb-3 pt-3">{feature.title}</h5>
                  <p className="text-muted mb-3 f-15">{feature.desc}</p>
                </div>
              </Col>
            </Row>
            :
            <Row key={key} className="align-items-center mt-5">
              <Col md={6}>
                <div className="mb-4">
                  <div className="my-4">
                    <i className="mdi mdi-account-group"></i>
                  </div>
                  <h5 className="darkblueText font-weight-normal mb-3 pt-3">{feature.title}</h5>
                  <p className="text-muted mb-3 f-15">{feature.desc}</p>
                </div>
              </Col>
              <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
                <div>
                  <img src={feature.img} alt="" className="img-fluid d-block mx-auto" />
                </div>
              </Col>
            </Row>
        )
      }
    </>
  );
}

const Feature = () => {
  const handleContextMenu = useCallback((event) => {
    event.preventDefault();
  }, [])
  const features = [
    {
      id: 1, img: "/assets/2.png", title: "Get enough of what you need.", desc: "Bountifull tracks sixteen nutrients that are key to maintaining optimal mental and physical health.", link: "/"
    },
    { id: 2, img: "/assets/4.png", title: "Focus on the positives.", desc: "We never track calories, fat, carbs, or sugar, as focusing on these four nutrients can often lead to a restrictive, unhealthy mindset when it comes to food.", link: "/" },
  ];
  return (
    <section className="section" id="feature">

      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-3">
              <h3 className="font-weight-normal text-dark"><span className="darkblueText">Meet your nutrition goals.</span></h3>
              <p className="text-muted">
                We focus on making sure you get enough of the good stuff, not on demonizing any one dietary scapegoat.
              </p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
        <Row className="justify-content-center mt-5">
          <div className='video'>
            <ReactPlayer url="https://www.youtube.com/watch?v=2Gjo9IXi5R0&ab_channel=MayWoollcott" onContextMenu={handleContextMenu} />
          </div>
        </Row>
      </Container>
    </section>
  );
}
export default Feature;