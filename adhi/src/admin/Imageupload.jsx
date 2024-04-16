import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav';
function Imageupload() {
  const [geturl, setgeturl] = useState([])
  const [getimg, setgetimg] = useState([])
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('https://api.adhiinteriors.com/upload', formData);
      console.log('Image uploaded successfully:', response.data);
      alert('image added successfully...')
      setgeturl(response.data.filename)


    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  useEffect(() => {
    axios.get("https://api.adhiinteriors.com/uploads")
      .then((response) => {
        setgetimg(response.data.filename)
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className='flex flex-col md:flex-row'>
    <header className='z-50'>
       <Sidenav></Sidenav>
       </header><br></br>
        <div className="items-center flex justify-center flex-col relative lg:left-52">
     <input type="file" onChange={handleFileChange} className='file-input file-input-bordered w-full max-w-xs' required />
     <button onClick={handleSubmit} className='btn bg-pink-500 rounded-md mb-2 mt-2 px-4 py-2'>Upload</button><br></br>
     <div>
    
       {geturl &&
         <a>{`https://api.adhiinteriors.com/${geturl}`}</a>

       }
     </div>
     </div>
     </div>
   
  )
}

export default Imageupload