import React from 'react'
const h2Render = props => (
  <span style={{ textAlign: 'center', color: '#00449e', fontSize: '2.25rem' }}>
    <center>{props.children}</center>
  </span>
)
const h3Render = props => (
  <span style={{ textAlign: 'center', color: '#00449e', textSize: '1.25rem' }}>
    <center>{props.children}</center>
  </span>
)
const h4Render = props => (
  <span style={{ textAlign: 'center', textSize: '1.5rem', fontWeight: '300', lineHeight: '1.5' }}>
    <center>{props.children}</center>
  </span>
)
const h5Render = props => (
  <span
    style={{
      textAlign: 'center',
      textSize: '1.5rem',
      fontWeight: '300',
      lineHeight: '1.5',
      color: '#19a974'
    }}
  >
    <center>{props.children}</center>
  </span>
)

export default {
  name: 'bodyPortableText',
  type: 'array',
  title: 'Post body',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        {
          title: 'H2',
          value: 'h2',
          blockEditor: {
            render: h2Render
          }
        },
        {
          title: 'H3',
          value: 'h3',
          blockEditor: {
            render: h3Render
          }
        },
        {
          title: 'H4',
          value: 'h4',
          blockEditor: {
            render: h4Render
          }
        },
        {
          title: 'H5',
          value: 'h5',
          blockEditor: {
            render: h5Render
          }
        },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' }
      ],

      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          }
        ]
      },
      of: [{ type: 'authorReference' }]
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'mainImage',
      options: { hotspot: true }
    },
    {
      type: 'column3',
      blockEditor: {
        icon: () => '| | |'
      }
    },

    {
      type: 'column2'
    }
  ]
}
