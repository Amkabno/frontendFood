"use client";
import { uploadImage } from "@/app/utils/image-upload";
import React from "react";
import { useState } from "react";
import { ChangeEvent } from "react";

export const ImageUpload = () => {
  const [file, setFile] = useState<File>();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };
  console.log(file);
  const handleOnClick = (file?: File) => {
    if(!file){
        console.log("File oruulagu");
        return
    }
    const imageURL = await uploadImage(file);
    console.log(imageURL)
  }
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={() => handleOnClick(file)}>Upload</button>
    </div>
  );
};
