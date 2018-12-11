import CMS from 'netlify-cms'

import ClassesPagePreview from './preview-templates/ClassesPagePreview'
import SchoolPagePreview from './preview-templates/SchoolPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import PedagogyPagePreview from './preview-templates/PedagogyPagePreview'

CMS.registerPreviewTemplate('classes', ClassesPagePreview)
CMS.registerPreviewTemplate('school', SchoolPagePreview)
CMS.registerPreviewTemplate('pedagogy', PedagogyPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
