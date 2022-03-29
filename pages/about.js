import React, {useState} from 'react'

export default function about() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm about">
          <img
            className="d-block w-100  about_Image"
            src="https://image.cnbcfm.com/api/v1/image/106349589-1579720435046gettyimages-1192592454.jpeg?v=1579721288&w=630&h=354&ffmt=webp"
            alt="Third slide"
          />
        </div>
        <div className="col-sm">One of three columns</div>
        <button type="submit" onClick={() =>setModalOpen(true)}>Submit</button>
      </div>
    </div>
  );
}
