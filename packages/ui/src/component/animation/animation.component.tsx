/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from "react"
import Matter from "matter-js"


export const MatterStepThree = () => {
  const boxRef = useRef<any>(null)
  const canvasRef = useRef<any>(null)
  const STATIC_DENSITY = 15

  const [constraints, setContraints] = useState<any>()
  const [scene, setScene] = useState<any>()
//   {bounds:{max:{}}, options: {}, canvas:{}, engine:{world:{bodies:[]}}}

  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect())
  }


  useEffect(() => {
    const Engine = Matter.Engine
    const Render = Matter.Render
    const World = Matter.World
    const Bodies = Matter.Bodies
    const Runner = Matter.Runner
    const Composite = Matter.Composite
    const Composites = Matter.Composites
    const Common = Matter.Common
    const MouseConstraint = Matter.MouseConstraint
    const Mouse = Matter.Mouse

    const engine = Engine.create({})
    const world = engine.world
    // create renderer
    const render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            wireframes: false,
            background: '#ffffff'
        }
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);


    setContraints(boxRef.current.getBoundingClientRect())
    setScene(render)
    window.addEventListener("resize", handleResize)
    
    // define our categories (as bit fields, there are up to 32 available)
    const defaultCategory = 0x0001,
        redCategory = 0x0002,
        greenCategory = 0x0004,
        blueCategory = 0x0008,
        orangeCategory = 0x0010,
        yellowCategory = 0x0012;

    const redColor = '#FFB7D5',
        blueColor = '#62CFF1',
        greenColor = '#26C58C',
        yellowColor = '#FFD84C',
        orangeColor = '#FF8C4C';

    // add floor
    World.add(world, Bodies.rectangle(400, 600, 900, 1, { 
        isStatic: true,
        render: {
            fillStyle: 'transparent',
        } 
    }));
    World.add(world, [
        // walls
        Bodies.rectangle(800, 0, 1, 2000, { isStatic: true, render: {
            fillStyle: 'transparent',
        }  }),
        Bodies.rectangle(0, 0, 1, 2000, { isStatic: true, render: {
            fillStyle: 'transparent',
        }  })
    ]);

    // create a stack with varying body categories (but these bodies can all collide with each other)
    World.add(world,
        Composites.stack(100, 0, 4, 7, 20, 20, function(x: any, y: any, column: any, row: number) {
            let category = redCategory,
                color = redColor;

            if (row > 8) {
                category = yellowCategory;
                color = yellowColor;
            } 
           else if (row > 6) {
                category = orangeCategory;
                color = orangeColor;
            } 
            else if (row > 4) {
                category = blueCategory;
                color = blueColor;
            } else if (row > 2) {
                category = greenCategory;
                color = greenColor;
            }

            const sides = Math.round(Common.random(1, 8));

            switch (Math.round(Common.random(0, 1))) {
            case 0:
                if (Common.random() < 0.8) {
                    return Bodies.rectangle(x, y, Common.random(25, 50), Common.random(25, 50), {      
                            // collisionFilter: {
                            //     category: category
                            // },
                            render: {
                                strokeStyle: 'transparent',
                                opacity: 0.6,
                                fillStyle: Common.choose(['#FFB7D5', '#26C58C', '#FFD84C', '#FF8C4C', '#62CFF1']),
                                lineWidth: 1
                            } });
                } else {
                    return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30), { 
                    //     collisionFilter: {
                    //     category: category
                    // },
                    render: {
                        strokeStyle: 'transparent',
                        opacity: 0.6,
                        fillStyle: Common.choose(['#FFB7D5', '#26C58C', '#FFD84C', '#FF8C4C', '#62CFF1']),
                        lineWidth: 1 }});
                }
            case 1:
                return Bodies.polygon(x, y, sides, Common.random(25, 50), { 
                //     collisionFilter: {
                //     category: category
                // },
                render: {
                    strokeStyle: 'transparent',
                    opacity: 0.6,
                    fillStyle: Common.choose(['#FFB7D5', '#26C58C', '#FFD84C', '#FF8C4C', '#62CFF1']),
                    lineWidth: 1}});
            }
        })
    );

    // this body will only collide with the walls and the green bodies
    World.add(world,
        Bodies.circle(310, 40, 30, {
            collisionFilter: {
                mask: defaultCategory | greenCategory
            },
            render: {
                fillStyle: greenColor
            }
        })
    );

    // this body will only collide with the walls and the red bodies
    World.add(world,
        Bodies.circle(400, 40, 30, {
            collisionFilter: {
                mask: defaultCategory | redCategory
            },
            render: {
                fillStyle: redColor
            }
        })
    );

      // this body will only collide with the walls and the orange bodies
      World.add(world,
        Bodies.circle(400, 40, 30, {
            collisionFilter: {
                mask: defaultCategory | orangeCategory
            },
            render: {
                fillStyle: orangeColor
            }
        })
    );

    // this body will only collide with the walls and the blue bodies
    World.add(world,
        Bodies.circle(480, 40, 30, {
            collisionFilter: {
                mask: defaultCategory | blueCategory
            },
            render: {
                fillStyle: blueColor
            }
        })
    );

      // this body will only collide with the walls and the yellow bodies
      World.add(world,
        Bodies.circle(480, 40, 30, {
            collisionFilter: {
                mask: defaultCategory | yellowCategory
            },
            render: {
                fillStyle: yellowColor
            }
        })
    );


  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (constraints && scene) {
      const { width, height } = constraints
      console.log(width, height)
      // Dynamically update canvas and bounds
      scene.bounds.max.x = width
      scene.bounds.max.y = height
      scene.options.width = width
      scene.options.height = height
      scene.canvas.width = width
      scene.canvas.height = height
      // Dynamically update floor
      const floor = scene.engine.world.bodies[0]
      Matter.Body.setPosition(floor, {
        x: width / 2,
        y: height + STATIC_DENSITY / 2,
      })
      Matter.Body.setVertices(floor, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY },
      ])

      const wallRight = scene.engine.world.bodies[1]
      Matter.Body.setPosition(wallRight, {
        x: width,
      })

      Matter.Body.setVertices(wallRight, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY },
      ])
    }
  }, [scene, constraints])

  return (
      <div
        ref={boxRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <canvas ref={canvasRef} />
      </div>
  )
}