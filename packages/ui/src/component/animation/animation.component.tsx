/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef, createRef } from "react";
import Matter from "matter-js";
import { IReactProps } from "../../interface/reactProps.interface";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Animation: React.FunctionComponent<IReactProps> = ({children}: IReactProps) => {
  const boxRef = useRef<any>(null);
  const canvasRef = createRef<HTMLCanvasElement>();

  const [constraints, setContraints] = useState<any>();
  const [scene, setScene] = useState<any>();
  //   {bounds:{max:{}}, options: {}, canvas:{}, engine:{world:{bodies:[]}}}

  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Runner = Matter.Runner;
    // const Composites = Matter.Composites;
    // const Common = Matter.Common;
    const MouseConstraint = Matter.MouseConstraint
        const Mouse = Matter.Mouse

    const engine = Engine.create({});
    const world = engine.world;
    // create renderer
    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current || undefined,
      options: {
        height: 480,
        wireframes: false,
        background: "#0C0C0C",
      },
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    setContraints(boxRef.current.getBoundingClientRect());
    setScene(render);
    window.addEventListener("resize", handleResize);
    const category1 = 0x0001,
        category2 = 0x0002;

    const redColor = "#FFB7D5",
      blueColor = "#62CFF1",
      greenColor = "#26C58C",
      yellowColor = "#FFD84C",
      orangeColor = "#FF8C4C",
      indigoColor = "#0057FF";

    // add floor
    World.add(
      world,
      Bodies.rectangle(400, 480, 2000, 1, {
        isStatic: true,
      
        render: {
          fillStyle: "#0C0C0C",
        },
      })
    );
    World.add(world, [
      // walls
      Bodies.rectangle(800, 0, 1, 2000, {
        isStatic: true,
     
        render: {
          fillStyle: "#0C0C0C",
        },
      }),
      Bodies.rectangle(0, 0, 1, 2000, {
        isStatic: true,
       
        render: {
          fillStyle: "#0C0C0C",
        },
      }),
    ]);
    World.add(
      world,
      Bodies.rectangle(
          400,
          0,
         400,
          26,
          {
          //   collisionFilter: {
          //     mask: category1 
          // },
            render: {
              opacity: 0.7,
              fillStyle: indigoColor,
            },
          })
    );

    // this body will only collide with the walls and the yellow bodies
    World.add(
      world,
      Bodies.circle(480, 40, 70, {
        collisionFilter: {
            mask: category1  | category2
        },
        render: {
          fillStyle: yellowColor,
          opacity: 0.9,
        },
      })
    );


        // this body will only collide with the walls and the red bodies
        World.add(
          world,
          Bodies.circle(440, 0, 70, {
            collisionFilter: {
              mask:  category1 | category2
          },
            render: {
              fillStyle: redColor,
              opacity: 0.9,
            },
          
          }, 2)
        );
   
        World.add(
          world,
          Bodies.rectangle(
              400,
              20,
              334,
              79,
              {
                collisionFilter: {
                  mask: category1 | category2
              },
                render: {
                  strokeStyle: "transparent",
                  opacity: 0.9,
                  fillStyle: orangeColor,
                },
              })
        );
        World.add(
          world,
          Bodies.rectangle(
              400,
              20,
             274,
              274,
              {
                collisionFilter: {
                  mask:  category1 
              },
                render: {
                  strokeStyle: "transparent",
                  opacity: 0.9,
                  fillStyle: blueColor,
                },
              })
        );

        World.add(
          world,
        Bodies.polygon(100, 10, 3, 121, {
          collisionFilter: {
            mask: category1 
        },
                    render: {
                      opacity: 0.9,
                      fillStyle: greenColor,
                    },
                  }));

                  // little yellow half circle
                  // green diamond
                  // orange half circle
                  // indigo half circle

                    World.add(world, [
                     
                      Bodies.rectangle(200, 70, 150, 150, { 
                        collisionFilter: {
                          mask: category1 
                      },
                          chamfer: { radius: [149, 0, 0, 0] },
                          render: {

                            opacity: 0.9,
                            fillStyle: orangeColor,
                          },
                      }),
          
              
                      Bodies.polygon(200, 80, 3, 140, { 
                        collisionFilter: {
                          mask: category1 
                      },
                          chamfer: { radius: [100, 5, 100] },
                          render: {

                            opacity: 0.9,
                            fillStyle: redColor,
                          },
                      })
                  ]);
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
        
        mouseConstraint.collisionFilter.mask = category1;

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
      // // Dynamically update floor
      // const floor = scene.engine.world.bodies[0];
      // Matter.Body.setPosition(floor, {
      //   x: width / 2,
      //   y: height + STATIC_DENSITY / 2,
      // });
      // Matter.Body.setVertices(floor, [
      //   { x: 0, y: height },
      //   { x: width, y: height },
      //   { x: width, y: height + STATIC_DENSITY },
      //   { x: 0, y: height + STATIC_DENSITY },
      // ]);

      const wallRight = scene.engine.world.bodies[1];
      Matter.Body.setPosition(wallRight, {
        x: width,
        y: 0
      });

      Matter.Body.setVertices(wallRight, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height },
        { x: 0, y: height },
      ]);
    }
  }, [scene, constraints]);

  return (
    <div
      ref={boxRef}
      style={{
        zIndex: 3,
        maxWidth: "100vw"
      }}
    >
      <canvas ref={canvasRef}/>
      {children}

    
    </div>
  );
};
