import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

const CodeEditor = () => {
  const [code, setCode] = useState(`print('Hello, World!')`);

  const runCode = () => {
    // API call to run the code
    console.log("Running code:", code);
  };

  return (
    <div className="code-editor">
      <AceEditor
        mode="python"
        theme="monokai"
        value={code}
        onChange={setCode}
        name="UNIQUE_ID"
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="400px"
      />
      <button onClick={runCode}>Run Code</button>
    </div>
  );
};

export default CodeEditor;
