import React from 'react'
import SanitizedHTML from 'react-sanitized-html'

interface IRichTextProps {
  text: string
}

const RichText: React.FC<IRichTextProps> = ({ text, ...props }) => (
  <SanitizedHTML
    {...props}
    allowedTags={['b', 'i', 'strong', 'a', 'p', 'ul', 'ol', 'li', 'br']}
    allowedAttributes={{ a: ['href', 'target'] }}
    allowedSchemes={['http', 'https', 'ftp', 'mailto', 'tel']}
    html={text}
  />
)

export default RichText
