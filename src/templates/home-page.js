import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Slider from 'react-slick'

export const HomePageTemplate = ({
  title,
  content,
  contentComponent,
  carousel,
  body,
  testimonials,
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
  const PageContent = contentComponent || Content

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
              <PageContent className="content" content={content} />
              <Testimonials testimonials={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  carousel: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })),
  }),
  testimonials: PropTypes.array,
}

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <HomePageTemplate
        title={post.frontmatter.title}
        content={post.html}
        contentComponent={HTMLContent}
        carousel={post.frontmatter.carousel}
        testimonials={post.frontmatter.testimonials}
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
`
