import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'

export const HomePageTemplate = ({
  title,
  carousel,
  info,
  body,
  testimonials,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1 main-content">
            <div className="content">
              <Features gridItems={carousel.images} />
              <h2>
                  {title}
              </h2>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {info.heading}
                  </h3>
                  <p>{info.description}</p>
                </div>
              </div>
              <Features gridItems={info.blurbs} />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {info.heading}
                  </h3>
                  <p>{info.description}</p>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  carousel: PropTypes.shape({
    images: PropTypes.array,
  }),
  info: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        body={frontmatter.body}
        info={frontmatter.info}
        carousel={frontmatter.carousel}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        body
        carousel {
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
