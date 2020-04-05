import React from 'react';

// https://www.spriters-resource.com/playstation_3/persona5/

export default function Sprite({
  filename,
  x,
  y,
  width,
  height,
  sheetwidth,
  sheetheight,
}) {
  const scaleX = x / (sheetwidth - width);
  const scaleY = y / (sheetheight - height);
  const scaleW = sheetwidth / width;
  const scaleH = sheetheight / height;

  return (
    <div
      style={{
        width: '100%',
        paddingTop: `calc(100% * ${height} / ${width}`,
        backgroundImage: `url(${filename})`,
        backgroundPosition: `calc(100% * ${scaleX}) calc(100% * ${scaleY})`,
        backgroundSize: `calc(100% * ${scaleW}) calc(100% * ${scaleH})`,
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}
