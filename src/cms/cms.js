import CMS from 'netlify-cms'

import { SlidesControl, SlidesPreview } from './Slides'
import HomePagePreview from './preview-templates/HomePagePreview'
import ClassesPagePreview from './preview-templates/ClassesPagePreview'
import SchoolPagePreview from './preview-templates/SchoolPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import PedagogyPagePreview from './preview-templates/PedagogyPagePreview'

CMS.registerWidget("slides", SlidesControl, SlidesPreview);
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('classes', ClassesPagePreview)
CMS.registerPreviewTemplate('school', SchoolPagePreview)
CMS.registerPreviewTemplate('pedagogy', PedagogyPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)