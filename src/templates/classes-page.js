import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Slider from 'react-slick'

export const ClassesPageTemplate = ({
  title, carousel, content, contentComponent
}) => {
  const PageContent = contentComponent || Content
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
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ClassesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  carousel: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })),
  }),

}

const ClassesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ClassesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        carousel={post.frontmatter.carousel}
      />
    </Layout>
  )
}

ClassesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ClassesPage

export const classesPageQuery = graphql`
  query ClassesPage($id: String!) {
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
      }
    }
  }
`
