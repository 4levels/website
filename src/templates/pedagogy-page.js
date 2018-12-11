import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Slider from 'react-slick'

export const PedagogyPageTemplate = ({
  image,
  title,
  carousel,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => {

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
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1 main-content">
            <div className="section">
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
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage
                  })`,
                }}
              />
              {/*

              <h2 className="has-text-weight-semibold is-size-2">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />

              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PedagogyPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  carousel: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })),
  }),
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const PedagogyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PedagogyPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        carousel={frontmatter.carousel}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

PedagogyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PedagogyPage

export const pedagogyPageQuery = graphql`
  query PedagogyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
        heading
        description
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
