import React from 'react';

function CustomButton(props) {
  const { className, fn, imgsrc } = props;

  return (
    <a className={className} onClick={() => fn}>
      <img src={imgsrc} />
    </a>
  );
}
