"use client";

import React from "react";
import type { NextPage } from "next";
import ImageGallery from "~~/components/ImageGallery";

const Home: NextPage = () => {
  const images = [
    {name: "Africa Arts", src:"https://bafybeibasfytwjurr7ois7mldbehdqt7ce74q2xojefr23rccazfvwc34e.ipfs.dweb.link/1.jpeg", selected: false},
    {name: "Beyond patterns", src:"https://bafybeibasfytwjurr7ois7mldbehdqt7ce74q2xojefr23rccazfvwc34e.ipfs.dweb.link/2.jpeg", selected: false},
    {name: "A picture is worth a thousand words", src:"https://bafybeibasfytwjurr7ois7mldbehdqt7ce74q2xojefr23rccazfvwc34e.ipfs.dweb.link/3.jpeg", selected: false},
    {name: "Folktales", src:"https://bafybeibasfytwjurr7ois7mldbehdqt7ce74q2xojefr23rccazfvwc34e.ipfs.dweb.link/4.jpeg", selected: false},
    {name: "", src:"https://bafybeibasfytwjurr7ois7mldbehdqt7ce74q2xojefr23rccazfvwc34e.ipfs.dweb.link/5.webp", selected: false},
    {name: "", src:"https://bafybeibasfytwjurr7ois7mldbehdqt7ce74q2xojefr23rccazfvwc34e.ipfs.dweb.link/6.jpeg", selected: false},
    {name: "", src:"https://bafybeibasfytwjurr7ois7mldbehdqt7ce74q2xojefr23rccazfvwc34e.ipfs.dweb.link/7.jpg", selected: false},
    {name: "", src:"https://bafybeibasfytwjurr7ois7mldbehdqt7ce74q2xojefr23rccazfvwc34e.ipfs.dweb.link/8.jpeg", selected: false},
    {name: "", src:"https://bafybeibasfytwjurr7ois7mldbehdqt7ce74q2xojefr23rccazfvwc34e.ipfs.dweb.link/9.jpeg", selected: false},
    {name: "", src:"https://bafybeibasfytwjurr7ois7mldbehdqt7ce74q2xojefr23rccazfvwc34e.ipfs.dweb.link/10.jpeg", selected: false},
  ];

  return (
    <>
      <ImageGallery images={images} />
    </>
  );
};

export default Home;
