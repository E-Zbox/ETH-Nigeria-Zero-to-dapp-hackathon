import React from "react";

interface IImageData {
  name: string;
  description: string;
  src: string;
}

interface ModalProps {
  isOpen: boolean;
  closeModal: any;
  imageData: IImageData;
}

const Modal = ({ isOpen, closeModal, imageData }: ModalProps) => {
  return (
    <div>
      <div
        style={{
          display: isOpen ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          transition: "opacity 0.6s ease-in-out",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            color: "black",
            borderRadius: "9px",
            backgroundColor: "#d2d2d2",
            transition: "transform 0.3s ease-in-out",
            transform: isOpen ? "translate(-50%, -50%)" : "translate(-50%, -60%)",
          }}
        >
          {imageData ? (
            <div style={{
              width: "100%",
              height: "100%",
            padding: "20px",
            backgroundImage: `url(${imageData.src}), linear-gradient(#0004, #0009);`
            }}>
              <h2 style={{fontSize:"1.35rem", fontWeight:"700",}}>{imageData.name}</h2>
              <p style={{ opacity:"0.8", textAlign:"justify", fontFamily:"monospace", fontSize:"1rem", lineHeight:"1.85rem", letterSpacing: "2px", height:"50vh", overflowY:"scroll"}}>{imageData.description}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <button style={{position: "absolute", top: "-40px", right: "0px", color: "#df3454", width:30, height: 30, border:"1px solid #df3454", borderRadius:"300px"}} onClick={closeModal}>X</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
