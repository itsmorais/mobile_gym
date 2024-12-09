import { useState } from 'react';

export default function UploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('File uploaded successfully');
    } else {
      console.error('Error uploading file');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='cursor-pointer' type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}