import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'


const HomePagePreview = ({ entry, getAsset, widgetFor }) => {

  const carouselImages = entry.getIn(['data', 'carousel', 'images'])
  const images = carouselImages ? carouselImages.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      carousel={{ images }}
      testimonials={testimonials}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}


export default HomePagePreview