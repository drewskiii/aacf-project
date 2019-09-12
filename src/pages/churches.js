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

import cross from '../images/cross-about.jpg'

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
                churches {
                  church {
                    link
                    name
                    img {
                        publicURL
                    }
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
            <Jumbotron fluid style={{backgroundImage: `url(${cross})`}} className={["text-center"].join(' ')}>
                <Container>
                    <Row>
                        <Col>
                            <h1>AACF IS NOT A REPLACEMENT FOR CHURCH!</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={12} md={8}>
                            <p>Sign up below to get a ride to one of the many churches around SLO!</p>
                            <button className="" type="button">
                                I need a ride!
                            </button>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Container className="mb-5 text-center"> {/* Can be fluid*/}
                <Row className="d-flex justify-content-center">
                    {data.allMarkdownRemark.edges[0].node.frontmatter.churches.map((church) => {
                        return (
                            <React.Fragment>
                                <Col md={4} lg={3} className="px-2 py-2 d-flex justify-content-center">
                                    <a href={church.church.link} target="_blank" rel="noopener noreferrer">
                                        <Card style={{ width: '14rem' }} >
                                            <Card.Img variant="top" src={church.church.img.publicURL} />
                                            <Card.Body>
                                                <Card.Title>{church.church.name}</Card.Title>
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