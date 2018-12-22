import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import ClassesPagePreview from './preview-templates/ClassesPagePreview'
import SchoolPagePreview from './preview-templates/SchoolPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import PedagogyPagePreview from './preview-templates/PedagogyPagePreview'

CMS.registerPreviewStyle('/css/slick.min.css');
CMS.registerPreviewStyle('/css/slick-theme.min.css');
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('classes', ClassesPagePreview)
CMS.registerPreviewTemplate('school', SchoolPagePreview)
CMS.registerPreviewTemplate('pedagogy', PedagogyPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)