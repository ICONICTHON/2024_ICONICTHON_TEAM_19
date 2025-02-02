import React from 'react';
import ScoreComponent from './FileChart/ScoreComponent';
import EssentailComponent from './Essential/EssentailComponent';
import RecButton from './RecButton';

const FileChart = ({ scoreValue }) => {
  return (
    <div className="flex flex-col gap-[28px] relative mt-[75px]">
      <ScoreComponent scoreValue={scoreValue} />
      <EssentailComponent />
      <div className="fixed bottom-4 right-4">
        <RecButton />
      </div>
    </div>
  );
};

export default FileChart;
