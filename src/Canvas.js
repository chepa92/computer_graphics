import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  function drawPixel(context){
    context.fillStyle = "#F00";
    context.fillRect(15, 15, 1, 1); //x, y, heigh, width
  }

  function drawLine(context){
    context.fillStyle = "#F00";
    context.fillRect(15, 15, 1, 1); //x, y, heigh, width
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    drawPixel(context);
    drawLine(context);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
