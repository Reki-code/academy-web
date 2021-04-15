import React from 'react'
import MUIRichTextEditor from 'mui-rte'

const Text = ({ resource }) => {
  return (
    <div>
      <MUIRichTextEditor
        readOnly
        inheritFontSize
        controls={[]}
        defaultValue={resource.content}
      />
    </div>
  )
}

export default Text
