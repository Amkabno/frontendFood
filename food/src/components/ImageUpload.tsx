"use client";
import React from "react";
import { useState } from "react";
import { ChangeEvent } from "react";

export const ImageUpload = () => {
  const [file, setFile] = useState<File>();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };
  console.log(file);
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button>Upload</button>
    </div>
  );
};
