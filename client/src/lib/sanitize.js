
import DOMPurify from 'dompurify';

// Sanitize untrusted review HTML before rendering it.
export const sanitizeHtml = (dirty) => {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      'b', 'strong', 'i', 'em', 'u',
      'p', 'br', 'ul', 'ol', 'li', 'a'
    ],
    ALLOWED_ATTR: ['href', 'title']
  });
};
