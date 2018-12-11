import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
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
                        <Link className="button is-small" to="about">
                          Keep Reading →
                        </Link>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
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

          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
