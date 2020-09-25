// import React, { useEffect, useState, useRef } from "react"
// import Matter from "matter-js"
// import CircleIcon from '../icons/circle.icon'
// import Parallelogram from '../icons/parallelogram.icon'
// import circle from '../icons/circle.svg'
// import $ from "jquery";


// export const MatterStepThree = () => {
//   const boxRef = useRef(null)
//   const canvasRef = useRef(null)

//   useEffect(() => {
//     const Engine = Matter.Engine
//     const Render = Matter.Render
//     const World = Matter.World
//     const Bodies = Matter.Bodies
//     const Runner = Matter.Runner
//     const Composite = Matter.Composite
//     const Composites = Matter.Composites
//     const Common = Matter.Common
//     const MouseConstraint = Matter.MouseConstraint
//     const Mouse = Matter.Mouse
//     const Vertices = Matter.Vertices
//     const Svg = Matter.Svg

//     const engine = Engine.create({})
//     const world = engine.world
   
//     // create renderer
//     const render = Render.create({
//         element: document.body,
//         engine: engine,
//         options: {
//             width: 800,
//             height: 600
//         }
//     });

//     Render.run(render);

//     // create runner
//     const runner = Runner.create();
//     Runner.run(runner, engine);

//     // add bodies
//     const svgs = [
//         circle
//         // <CircleIcon key={"circle"}/> ,
//         // <Parallelogram key={"para"} />
//         // 'iconmonstr-check-mark-8-icon', 
//         // 'iconmonstr-paperclip-2-icon',
//         // 'iconmonstr-puzzle-icon',
//         // 'iconmonstr-user-icon'
//     ];

//     if (typeof $ !== 'undefined') {
//         for (let i = 0; i < svgs.length; i += 1) {
//             (function(i) {
//                 // $.get('./svg/' + svgs[i] + '.svg').done(function(data: any) {
//                     // console.log(circle)
//                     const path = '<path xmlns="http://www.w3.org/2000/svg" id="puzzle-1" d="M92.556,359c16.79,0,22.473-9.002,29.312-15.825C135.833,329.159,153,335.128,153,357.71V462h104.29  c22.582,0,28.551-17.167,14.544-31.131c-6.832-6.84-15.834-12.523-15.834-29.321C256,382.889,275.028,359,307.5,359  s51.5,23.889,51.5,42.548c0,16.798-9.002,22.481-15.825,29.321C329.159,444.833,335.128,462,357.71,462H462V357.71  c0-22.582-17.167-28.551-31.131-14.535c-6.84,6.823-12.523,15.825-29.321,15.825C382.889,359,359,339.972,359,307.5  s23.889-51.5,42.548-51.5c16.798,0,22.481,9.002,29.321,15.834C444.833,285.841,462,279.872,462,257.29V153H357.71  c-22.582,0-28.551-17.167-14.535-31.131c6.823-6.84,15.825-12.523,15.825-29.312C359,73.889,339.972,50,307.5,50  S256,73.889,256,92.556c0,16.79,9.002,22.473,15.834,29.312C285.841,135.833,279.872,153,257.29,153H153v104.29  c0,22.582-17.167,28.551-31.131,14.544C115.029,265.002,109.346,256,92.556,256C73.889,256,50,275.028,50,307.5  S73.889,359,92.556,359z"></path>'
//                     // console.log(data)
//                     const vertexSets: any[] = [],
//                         color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);

//                     // $(data).find('path').each(function(i: any, path: any) {
//                         const points = Svg.pathToVertices(path, 30);
//                         vertexSets.push(Vertices.scale(points, 0.4, 0.4));
//                     // }); 

//                     World.add(world, Bodies.fromVertices(100 + i * 150, 200 + i * 50, vertexSets, {
//                         render: {
//                             fillStyle: color,
//                             strokeStyle: color,
//                             lineWidth: 1
//                         }
//                     }, true));
//                 // });       
//             })(i);
//         }

//         // $.get('./svg/svg.svg').done(function(data: any) {
//         //     const vertexSets: any[] = [],
//         //         color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);

//         //     $(data).find('path').each(function(i: any, path: any) {
//         //         vertexSets.push(Svg.pathToVertices(path, 30));
//         //     });

//         //     World.add(world, Bodies.fromVertices(400, 80, vertexSets, {
//         //         render: {
//         //             fillStyle: color,
//         //             strokeStyle: color,
//         //             lineWidth: 1
//         //         }
//         //     }, true));
//         // });
//     }

//     World.add(world, [
//         Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
//         Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
//         Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
//         Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
//     ]);

//     // add mouse control
//     const mouse = Mouse.create(render.canvas),
//         mouseConstraint = MouseConstraint.create(engine, {
//             mouse: mouse,
//             constraint: {
//                 stiffness: 0.2,
//                 render: {
//                     visible: false
//                 }
//             }
//         });

//     World.add(world, mouseConstraint);

//     // keep the mouse in sync with rendering
//     render.mouse = mouse;

//     // fit the render viewport to the scene
//     Render.lookAt(render, {
//         min: { x: 0, y: 0 },
//         max: { x: 800, y: 600 }
//     });

//     // context for MatterTools.Demo
//     // return {
//     //     engine: engine,
//     //     runner: runner,
//     //     render: render,
//     //     canvas: render.canvas,
//     //     stop: function() {
//     //         Matter.Render.stop(render);
//     //         Matter.Runner.stop(runner);
//     //     }
//     // };

//   }, [])

//   return (
//       <div
//         ref={boxRef}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           pointerEvents: "none",
//         }}
//       >
//         <canvas ref={canvasRef} />
//       </div>
//   )
// }