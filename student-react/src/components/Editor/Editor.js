import React, { useRef } from 'react'
import JoditEditor from 'jodit-react'
import styled from 'styled-components'

import Flex from 'components/Flex'

const DarkSpan = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: black;
  margin-bottom: 6px;
`
const WrapperText = styled.div`
  .jodit-container:not(.jodit_inline) {
    border-radius: 8px !important;
    margin-top: 5px !important;
  }
  .jodit-toolbar__box:not(:empty) {
    border-radius: 8px 8px 0px 0px !important;
  }
`

const EditorWrap = styled.div`
  width: 100%;
  margin-top: 10px;
`

const Editor = ({
  value,
  autofocus = false,
  isReadOnly = false,
  onChange,
  buttons = 'bold, |,ul,|,link,unlink,image',
  labelName = 'Remarks',
  placeholder = 'Enter your remarks here...',
  icon = false,
}) => {
  const editor = useRef(null)

  const config = {
    readonly: isReadOnly,
    autofocus: autofocus,
    useSearch: false,
    spellcheck: false,
    enter: 'P',
    defaultMode: '1',
    toolbarAdaptive: false,
    toolbarSticky: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    minHeight: 200,
    maxHeight: 500,
    minWidth: null,
    uploader: {
      insertImageAsBase64URI: true,
    },
    buttons: buttons,
    editorCssClass: 'alic',
    placeholder: placeholder,
  }

  return (
    <EditorWrap>
      <Flex centerVertically>
        {icon && <span style={{ paddingLeft: 5 }}>{icon}</span>}
      </Flex>
      <WrapperText>
        <JoditEditor
          style={{ width: '100%' }}
          ref={editor}
          value={value}
          config={config}
          tabIndex={1}
          onBlur={onChange}
        />
      </WrapperText>
    </EditorWrap>
  )
}

export default Editor
