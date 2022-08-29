import { useState } from "react";


export default function Profile ({image, changeImage}) {
    
    const [showUploadButton, setShowUploadButton] = useState(false);

    function mouseEnter () { 
        return (
            setShowUploadButton(prevValue => !prevValue)
        )
    };

    function mouseLeave () { 
        return (
            setShowUploadButton(prevValue => !prevValue)
        )
    };

    

    return (
        <div className="profilePicDiv" onMouseEnter={mouseEnter} onMouseLeave= {mouseLeave}>
            <img src={image} alt="Profile picture" id="photo"/>
            <input type='file' accept='Image/*' name="file" id="file" onChange={changeImage}/>
            {showUploadButton && <label htmlFor="file" id="uploadBtn">Upload Picture</label> }
            {/* <div id="oya">< img src={image} id='idd'/> Hello where are you</div> */}
        </div>
    )
}