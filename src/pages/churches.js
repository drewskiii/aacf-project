import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

import Head from '../components/head'

// bootstrap imports
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

// import cross from '../images/cross-about.jpg'


import churchesStyles from './churches.module.scss'

const Churches = () => {
    const data = useStaticQuery(graphql`
    query
    {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "Churches"}}}) {
          edges {
            node {
              frontmatter {
                title
                link
                churches {
                  church {
                    link
                    name
                  }
                }
              }
            }
          }
        }
      }
      
    `)

    return (
        <Layout>
            <Head title="Churches"/>
            {/* style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${cross})`}} */}
            <Jumbotron fluid className={[churchesStyles.heading,"text-center"].join(' ')}>
                <Container>
                    <Row>
                        <Col>
                            <h1>AACF IS NOT A REPLACEMENT FOR CHURCH!</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={12} md={8}>
                            <p>People in AACF all go to different churches around SLO and a majority like to carpool as well.
                                Below are a list of churches that some members of AACF go to. Click on each church to learn more about them.</p>
                            <p>Click below to get a ride to church!</p>
                            {/* <Button size="lg" variant="primary">I NEED A RIDE!</Button> */}
                            { data.allMarkdownRemark.edges[0].node.frontmatter.link.trim() === "" ? 
                                    (<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Not Ready Yet!</Tooltip>}>
                                        <span className="d-inline-block">
                                            <Button className={churchesStyles.button} disabled style={{ pointerEvents: 'none' }} size="lg" variant="secondary">Sign Up</Button>
                                        </span>
                                    </OverlayTrigger>
                                    ) 
                                    : (<Button className={churchesStyles.button} href={data.allMarkdownRemark.edges[0].node.frontmatter.link} size="lg" variant="outline-primary">SIGN UP</Button>) }
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Container className="mb-5 text-center"> {/* Can be fluid*/}
                <Row className="d-flex justify-content-center">
                    {data.allMarkdownRemark.edges[0].node.frontmatter.churches.map((church, index) => {
                        return (
                            <React.Fragment key={index}>
                                {/* {console.log(index)} */}
                                {/* TODO: Should use react-key-index instead */}
                                <Col md={4} lg={3} className="px-2 py-2 d-flex justify-content-center">
                                    <a href={church.church.link} target="_blank" rel="noopener noreferrer">
                                        <Card className={["border-0", churchesStyles.card].join(' ')}>
                                            {/* <Card.Img variant="top" src={church.church.img.publicURL} /> */}
                                            <Card.Body >
                                                <Card.Title className={churchesStyles.cardText}>{church.church.name}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </Col>
                            </React.Fragment>
                        )
                    })}
                </Row>
            </Container>
        </Layout>

    )
}
// Will need to wrap each card in an <a></a> tag and have a key for each child!

export default Churches