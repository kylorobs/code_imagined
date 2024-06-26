/* eslint-disable react/no-children-prop */
/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Prism from 'prismjs'

const Slice_Code = ({ slice }) => {
    // const rawMarkdown = RichText.asText(slice.primary.codestring.richText)

    const rawMarkdown = RichText.asText(slice.primary.codestring.richText)

    useEffect(() => {
        Prism.highlightAll()
    }, [])

    if (slice) {
        if (slice.primary.hide) return null
        return <ReactMarkdown children={rawMarkdown} />
    }
    return null
}

export default Slice_Code

export const query = graphql`
    fragment PageComponentCode on PrismicPageDataBodyCode {
        primary {
            hide
            codestring {
                richText
            }
        }
    }

    fragment PostComponentCode on PrismicPostDataBodyCode {
        primary {
            hide
            codestring {
                richText
            }
        }
    }

    fragment CoursePageComponentCode on PrismicCoursePageDataBodyCode {
        primary {
            hide
            codestring {
                richText
            }
        }
    }

    fragment CourseComponentCode on PrismicCourseDataBodyCode {
        primary {
            hide
            codestring {
                richText
            }
        }
    }
`
