import React, { useRef } from 'react'

const FileUpload = ({ accept , children }) => {
    const inputRef = useRef<HTMLInputElement>()
    return (
        <div onClick={() => inputRef.current.click()}>
            <input ref={inputRef} type="file" accept={accept} style={{display:'none'}} onChange={(e) => console.log(e.target.files)}/>
            {children}
        </div>
    )
}

export default FileUpload;
