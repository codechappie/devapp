import React, { useState } from 'react';

// Import Brace and the AceEditor Component
import brace from 'brace';
import AceEditor from 'react-ace';

// Import a Mode (language)
import 'brace/mode/jsx';
import 'brace/mode/javascript';
import 'brace/mode/typescript';
import 'brace/mode/html';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/dracula';

const index = ({ id, defaultValue, onChange, language = "javascript" }) => {
    const [newValue, setNewValue] = useState("")
    console.log(onChange)
    const showValue = () => {
        console.log(defaultValue)
    }
    const cambiar = (el) => {
        console.log(el)
    }
    return (
        <AceEditor
            mode={language}
            theme="dracula"
            onChange={e => onChange(e)}
            value={defaultValue}
            name={id}
            className={`codeeditor`}
            wrapEnabled={true}
            readOnly={false}
            editorProps={{
                $blockScrolling: true,
                useWorker: false
            }}
        />

    )
}

export default index
