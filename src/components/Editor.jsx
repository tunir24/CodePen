import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/css/css.js'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import './../index.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt ,faExpandAlt} from '@fortawesome/free-solid-svg-icons'

function Editor({displayName, language, value, onChange}) {
    const [open,setopen]=useState(true);
    function handleChange(editor, data, value) {
        onChange(value)
    }
  return (
    <div className={`editor-container ${open?'':"collapsed"}`}>
        <div className='editor-title'>
            {displayName}
            <button onClick={()=>setopen(!open)}>
                <FontAwesomeIcon icon={open?faCompressAlt:faExpandAlt} />
            </button>
        </div>
        <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: 'material',
            lineNumbers: true,
        }}
        />
    </div>
  )
}

export default Editor