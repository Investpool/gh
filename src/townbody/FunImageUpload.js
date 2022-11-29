import React from 'react';

import "./funImageUpload.css"


export default function FunImageUpload() {
//   const [image, setImage] = useState()

// function handleImage(e) {
//   console.log(e.target.files)
//   setImage(e.target.files(0))
// }
// function handleApi(){
//   const formData = new FormData()
//   formData.append("image", image)
//   axios.post('url', formData).then((res)=>{
//     console.log(res)
//   })
//}
function handleClick(){
  console.log();
}

  return (
    <>
    <div className='maintab'>
        <div className='inputtab'>
           <input type="file" name="file"/>
           <button onClick={handleClick} >Submit</button>
        </div>
        <div className='tabs'>
            Notification
        </div>
    </div>
    </>
  );
}
