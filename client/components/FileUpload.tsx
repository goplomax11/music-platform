import React, { useRef } from 'react'

const FileUpload = ({ accept , children, setFile }) => {
    const inputRef = useRef<HTMLInputElement>()
    return (
        <div onClick={() => inputRef.current.click()}>
            <input ref={inputRef} type="file" accept={accept} style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])}/>
            {children}
        </div>
    )
}

export default FileUpload;
