import Editor from '@monaco-editor/react';
import DropDownSelect from '../../atoms/DropDownSelect';
import { useEffect, useRef, useState } from 'react';


export default function EditorComponent() {
    const [language, setLanguage] = useState('javascript');
    const editorRef = useRef(null);

    function handleEditorChange(value, event) {
        console.log("handle editor: ", value);
        //console.log("ref: ", editorRef.current.getValue());
    }

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    }

    useEffect(() => {
        let placeholder = "";
        if (language === 'javascript' || language === 'cpp') {
            placeholder = `// Add your Code Here`;
        }else if (language === 'python') {
            placeholder = `# Add your Code Here`;
        }else {
            placeholder = "";
        }

        if (editorRef.current) {
            editorRef.current.setValue(placeholder);
        }
        
    }, [language])

    return (
        <div className="editor-container">
            <DropDownSelect  onLanguageChange={handleLanguageChange}/>
            <Editor
                theme='light'
                height= {'100vh'}
                defaultLanguage="javascript"
                language={language}

                defaultValue="// Add your Code Here"
                onChange={handleEditorChange}
                options={
                    {
                        fontSize: 16,
                        minimap: {
                            enabled: false
                        },
                        automaticLayout: true,
                        fontFamily: 'monospace',
                        wordWrap: 'on',
                        wrappingIndent: 'same'
                    }
                }
                onMount={(editor) => {
                    editorRef.current = editor;
                }}
            />
        </div>
    );

}