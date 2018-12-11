import React from 'react'
import PropTypes from 'prop-types'
import { ClassesPageTemplate } from '../../templates/classes-page'

const ClassesPagePreview = ({ entry, widgetFor }) => (
  <ClassesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ClassesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ClassesPagePreview
