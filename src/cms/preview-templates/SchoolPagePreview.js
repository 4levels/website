import React from 'react'
import PropTypes from 'prop-types'
import { SchoolPageTemplate } from '../../templates/school-page'

const SchoolPagePreview = ({ entry, widgetFor }) => (
  <SchoolPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

SchoolPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SchoolPagePreview
