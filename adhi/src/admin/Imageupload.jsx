import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidenav from './Sidenav';
const ImageUpload = () => {
  const [geturl, setgeturl] = useState([])
  const [getimg, setgetimg] = useState([])
   document.body.style.display = "flex"
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData);
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

    <div>
     <header>
        <Sidenav></Sidenav>
        </header>
      <input type="file" onChange={handleFileChange} required /><br></br>
      <button onClick={handleSubmit}>Upload</button><br></br>
      <div>
     
        {geturl &&
          <a>{`https://api.adhiinteriors.com/${geturl}`}</a>

        }
      </div>

    </div>
  );
};

export default ImageUpload;
