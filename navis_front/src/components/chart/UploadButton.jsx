import React from 'react';
import file from '../../assets/images/file.svg';

const UploadButton = ({ onFileSelect }) => {
  const handleFileChange = event => {
    if (event.target.files.length > 0) {
      onFileSelect(event.target.files[0]);
    }
  };

  return (
    <label className="w-[135px] h-[50px] rounded-[20px] bg-brown-100/60 flex items-center justify-center cursor-pointer shadow-uploadButton">
      <input type="file" className="hidden" accept=".xls,.xlsx,.xlsm" onChange={handleFileChange} />
      <img src={file} alt="파일 아이콘" />
      <p className="font-semibold text-xl text-[#ffff] text-center tracking-[-2.1px] ml-[5px]">
        파일 올리기
      </p>
    </label>
  );
};

export default UploadButton;
