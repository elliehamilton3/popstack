/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef, createRef } from "react";
const globalAny: any = global;
globalAny.decomp = require('poly-decomp');
import Matter from "matter-js";
import { IReactProps } from "../../interface/reactProps.interface";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Animation: React.FunctionComponent<IReactProps> = ({children}: IReactProps) => {
  const boxRef = useRef<any>(null);
  const canvasRef = createRef<HTMLCanvasElement>();

  const [constraints, setContraints] = useState<any>();
  const [scene, setScene] = useState<any>();

  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Vertices = Matter.Vertices;
    const Runner = Matter.Runner;
    const MouseConstraint = Matter.MouseConstraint
    const Mouse = Matter.Mouse

    const engine = Engine.create({});
    const world = engine.world;
    // create renderer
    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        height: 480,
        wireframes: false,
        background: "#0C0C0C",
        width: 800
      },
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    setContraints(boxRef.current.getBoundingClientRect());
    setScene(render);
    window.addEventListener("resize", handleResize);

    const redColor = "#FFB7D5",
      blueColor = "#62CFF1",
      greenColor = "#26C58C",
      yellowColor = "#FFD84C",
      orangeColor = "#FF8C4C",
      indigoColor = "#0057FF";

    World.add(world, [
      // walls
      Bodies.rectangle(400, 0, 800, 1, { isStatic: true, render: {fillStyle: "#0C0C0C"}, }),
      Bodies.rectangle(400, 480, 800, 1, { isStatic: true, render: {fillStyle: "#0C0C0C"}, }),
      Bodies.rectangle(800, 300, 1, 480, { isStatic: true, render: {fillStyle: "#0C0C0C"}, }),
      Bodies.rectangle(0, 300, 1, 480, { isStatic: true, render: {fillStyle: "#0C0C0C"}, }),
  ]);

    const diamond = Vertices.fromPath('M22.3893 106.347C20.7669 105.778 19.6895 104.236 19.7132 102.517L21.0541 5.55896C21.0919 2.82619 23.7982 0.935262 26.3773 1.83959L117.882 33.9248C119.505 34.4937 120.582 36.0357 120.558 37.7548L119.217 134.713C119.18 137.445 116.473 139.336 113.894 138.432L22.3893 106.347Z ');
    // const triangle = Vertices.fromPath('M98.6384 10.9666C99.9591 8.18501 103.796 7.87619 105.544 10.4107L216.689 171.513C218.437 174.047 216.787 177.524 213.717 177.771L18.6265 193.474C15.5573 193.721 13.3715 190.553 14.6922 187.772L98.6384 10.9666Z');
    // const a = Vertices.fromPath('');
    // const tearDrop = Vertices.fromPath('M41.7152 90.546C61.9379 63.2953 142.314 45.4906 161.66 41.5453C163.937 41.0807 166.072 42.665 166.288 44.9798C168.117 64.639 174.363 146.726 154.14 173.976C131.101 205.022 87.2576 211.512 56.2124 188.474C25.1671 165.435 18.6765 121.591 41.7152 90.546Z');

    // const halfCircle = Vertices.fromPath('M61.87 3.66085C62.7465 1.63307 65.0946 0.734882 67.0989 1.66403C81.2526 8.22557 135.609 33.4247 200.504 63.5096C265.399 93.5945 319.756 118.794 333.909 125.355C335.914 126.284 336.746 128.657 335.764 130.636C299.54 203.72 211.438 235.016 136.995 200.504C62.5513 165.993 29.5034 78.5332 61.87 3.66085Z');


    World.add(world, [
  
      // Green diamond
    Bodies.fromVertices(480, 80, diamond, {
      render: {
          fillStyle: greenColor,
          strokeStyle: greenColor,
          opacity: 0.9,
      }
  }),

  // Green triangle
  Bodies.polygon(
    600,
    20,
    3,
    121,
    {
      chamfer: { radius: 4 },
      render: {
        opacity: 0.9,
        fillStyle: greenColor,
      },
    }),


// Indigo rectangle
Bodies.rectangle(
  480, 30,
  400,
  26,
  {
    chamfer: { radius: 4 },
    render: {
      opacity: 0.7,
      fillStyle: indigoColor,
    },
  }),
  // Orange semi-circle
Bodies.rectangle(480, 20, 210, 100, { 
  chamfer: { radius: [100, 100, 4, 4] },
  render: {
    opacity: 0.9,
    fillStyle: orangeColor,
  },
}),
  // Indigo semi-circle
  Bodies.rectangle(480, 20, 210, 100, { 
    chamfer: { radius: [4, 4, 100, 100] },
    render: {
      opacity: 0.9,
      fillStyle: indigoColor,
    },
  }),
    // Yellow semi-circle
    Bodies.rectangle(480, 20, 63, 30, { 
      chamfer: { radius: [4, 4, 30, 30] },
      render: {
        opacity: 0.9,
        fillStyle: yellowColor,
      },
    }),
  // Pink teardrop
// Bodies.fromVertices(0, 80, tearDrop, {
//   render: {
//       fillStyle: redColor,
//       opacity: 0.9,
//   }
// }),
// Yellow Circle
Bodies.circle(480, 40, 70, {
  render: {
    fillStyle: yellowColor,
    opacity: 0.9,
  },
}),
// Pink Circle
Bodies.circle(540, 30, 70, {
  render: {
    fillStyle: redColor,
    opacity: 0.9,
  },

}),
// Orange Rectangle
Bodies.rectangle(
  400,
  50,
  334,
  79,
  {
    chamfer: { radius: 4 },
    render: {
      opacity: 0.9,
      fillStyle: orangeColor,
    },
  }),
  // Blue Square
  Bodies.rectangle(
    400,
    20,
    174,
    174,
    {
      chamfer: { radius: 4 },
      render: {
        opacity: 0.9,
        fillStyle: blueColor,
      },
    })
  ])


    //  add mouse control
    const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;
    
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (constraints && scene) {
      const { width } = constraints;
      const height = 480;
      // Dynamically update canvas and bounds
      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;

    }
  }, [scene, constraints]);

  return (
    <div
      ref={boxRef}
    >
      <canvas ref={canvasRef}/>
      {children}

    
    </div>
  );
};
