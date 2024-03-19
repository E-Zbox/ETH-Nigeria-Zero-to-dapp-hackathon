import { useEffect, useState } from "react";
import Modal from "./Modal";

const ImageGallery = ({ images }: any) => {
  const [selectedImage, setSelectedImage] = useState(null);
  // const [searchQuery, setSearchQuery] = useState("");

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
  };

  const filteredImages = images.filter((image: any) => (image));

  useEffect(()=> {
    console.log("print...")
    console.log(selectedImage)
  }, [selectedImage])

  return (
    <>
      <div className="images">
        {filteredImages.map((image: any, index: any) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            style={{ width: "33%", cursor: "pointer" }}
            className="image"
            onClick={() => handleImageClick(image)}
          />
        ))}

        {selectedImage && <Modal isOpen={true} closeModal={() => setSelectedImage(null)} imageData={selectedImage} />}
      </div>
    </>
  );
};

export default ImageGallery;
