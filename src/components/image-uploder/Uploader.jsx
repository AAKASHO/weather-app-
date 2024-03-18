import React, { useState,useRef,useEffect } from 'react';

const Uploader = () => {

    const [imagesFiles, setImagesFiles] = useState([]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                setImagesFiles((prevFiles) => [...prevFiles, { file, url: event.target.result }]);
            };

            reader.readAsDataURL(file);
        }
    };

    const removeFiles = (url) => {
        const filteredFiles = imagesFiles.filter((item) => item.url !== url);
        setImagesFiles(filteredFiles);
    };
    

    return (
        <div className="fileuploder-main">
            <label htmlFor="dropzone-file" className="fileuploder-label">
                <div className="fileuploder-label-inner">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.75 15.9985V23.436C25.75 23.9996 25.5261 24.5401 25.1276 24.9386C24.7291 25.3371 24.1886 25.561 23.625 25.561H2.375C1.81141 25.561 1.27091 25.3371 0.872398 24.9386C0.473883 24.5401 0.25 23.9996 0.25 23.436V15.9985C0.25 15.7167 0.361942 15.4465 0.561199 15.2472C0.760457 15.048 1.03071 14.936 1.3125 14.936C1.59429 14.936 1.86454 15.048 2.0638 15.2472C2.26306 15.4465 2.375 15.7167 2.375 15.9985V23.436H23.625V15.9985C23.625 15.7167 23.7369 15.4465 23.9362 15.2472C24.1355 15.048 24.4057 14.936 24.6875 14.936C24.9693 14.936 25.2395 15.048 25.4388 15.2472C25.6381 15.4465 25.75 15.7167 25.75 15.9985ZM8.43922 7.18774L11.9375 3.68813V15.9985C11.9375 16.2803 12.0494 16.5506 12.2487 16.7498C12.448 16.9491 12.7182 17.061 13 17.061C13.2818 17.061 13.552 16.9491 13.7513 16.7498C13.9506 16.5506 14.0625 16.2803 14.0625 15.9985V3.68813L17.5608 7.18774C17.7601 7.3871 18.0306 7.49911 18.3125 7.49911C18.5944 7.49911 18.8649 7.3871 19.0642 7.18774C19.2636 6.98837 19.3756 6.71797 19.3756 6.43602C19.3756 6.15407 19.2636 5.88367 19.0642 5.6843L13.7517 0.371798C13.653 0.27301 13.5359 0.194641 13.4069 0.141172C13.2779 0.0877022 13.1396 0.0601807 13 0.0601807C12.8604 0.0601807 12.7221 0.0877022 12.5931 0.141172C12.4641 0.194641 12.347 0.27301 12.2483 0.371798L6.93578 5.6843C6.73641 5.88367 6.62441 6.15407 6.62441 6.43602C6.62441 6.71797 6.73641 6.98837 6.93578 7.18774C7.13515 7.3871 7.40555 7.49911 7.6875 7.49911C7.96945 7.49911 8.23985 7.3871 8.43922 7.18774Z" fill="#AAAAAA"/>
</svg>

                    <p className="uploder-descrp"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="uploder-note">SVG, PNG, JPG, GIF or PDF (MAX. 800x400px)</p>
                </div>
                <input onChange={handleFileChange} id="dropzone-file" type="file" className="hidden" />
            </label>

            {/* images main box */}
            {imagesFiles.length > 0 && 
            <div className='fileuplodr-list'>
            {imagesFiles && imagesFiles.map((item,idx)=>{
                return(
                    // particular one image
                <div className='filuploadr-image'>
                    <span onClick={()=>{removeFiles(item.url)}} className='fileclose-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className='text-white' height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>
                    </span>
                    {/* <img src={item.url} className='' alt="" /> */}
                    <em style={{ backgroundImage: `url(${item.url})` }}></em>
                </div>
                )
            })}
        </div>
            }
        </div>
    )
}

export default Uploader;
