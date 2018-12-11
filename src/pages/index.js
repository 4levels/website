import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import Testimonials from '../components/Testimonials'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Slider from 'react-slick'


export default class IndexPage extends React.Component {

  render() {
    const { data } = this.props
    const { node } = data.allMarkdownRemark.edges[0]
    const { html } = node
    const { title, carousel, testimonials } = node.frontmatter
    const slickSettings = {
      infinite: true,
      autoplay: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    }

    return (
      <Layout>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1 main-content">
                  <div className="content">
                    <Slider {...slickSettings }>
                      { carousel.images.map((item, idx) => (
                        <div key={"slick_" + idx}>
                          <PreviewCompatibleImage imageInfo={item}/>
                        </div>
                      )) }
                    </Slider>
                    <h2>
                        {title}
                    </h2>
                    <HTMLContent content={html}/>
                    <Testimonials testimonials={testimonials} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        { /*

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1 main-content">
                {posts
                  .map(({ node: post }, idx) => (
                    <div
                      className="section"
                      key={post.id}
                    >
                      { idx ? (
                        <h2 className="title has-text-weight-bold is-size-3">{post.frontmatter.title}</h2>
                      )
                      : (
                        <h1 className="title has-text-weight-bold is-size-2">{post.frontmatter.title}</h1>
                      )
                      }
                      <HTMLContent className="content" content={post.html} />
                      <p>
                        <br />
                        <br />
                        <Link className="button is-small" to="school">
                          Onze School →
                        </Link>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

         */ }

      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "home-page" } }}
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            carousel {
              images {
                image {
                  childImageSharp {
                    fluid(maxWidth: 1280, quality: 64, maxHeight: 200, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                text
              }
            }
            testimonials {
              author
              quote
            }
          }
        }
      }
    }
  }
`
