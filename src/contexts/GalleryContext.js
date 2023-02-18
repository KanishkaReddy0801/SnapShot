import React, { useState, useContext } from "react";

const GalleryContext = React.createContext();

function GalleryProvider(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);

  const updateSearchTerm = (newTerm) => {
    setSearchTerm(newTerm);
  };

  const updateCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  return (
    <GalleryContext.Provider
      value={{
        searchTerm,
        category,
        images,
        updateSearchTerm,
        updateCategory,
        updateImages,
      }}
    >
      {props.children}
    </GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
}

export { GalleryProvider, useGallery };
