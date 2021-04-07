import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ServicesPagePreview from './preview-templates/ServicesPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import VolunteersPagePreview from './preview-templates/VolunteersPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('services', ServicesPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('volunteer', VolunteersPagePreview);
CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('index', IndexPagePreview);
