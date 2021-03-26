import React, { useRef, useEffect, useState } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    putpixel(10, 15, "blue");
    drawLine({x0: 1, y0: 1, x1: 200, y1: 10}, "red");
  }, []);

  function putpixel(x, y, color) {
    const context = canvasRef.current.getContext("2d");
    context.fillStyle = color;
    context.fillRect(x, y, 1, 1); //x, y, heigh, width
  }

  const drawLine = (position, color) => {
    const { x0, y0, x1, y1 } = position;
    let dx = x1 - x0;
    let dy = y1 - y0;

    let d = (2 * dy) - dx;
    let y = y0;

    for (let x = x0; x < x1; x++)
    {
      putpixel(x, y, color);
        if (d >= 0)
        {
             y = y + 1;
             d = d - 2 * dx;
        }
        d = d + 2 * dy;
    }
};
  

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
