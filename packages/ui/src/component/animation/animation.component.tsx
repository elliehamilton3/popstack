import React, { useEffect, useState, useRef } from "react"
import Matter from "matter-js"


export const MatterStepThree = () => {
  const boxRef = useRef(null)
  const canvasRef = useRef(null)

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
    World.add(world, Bodies.rectangle(400, 600, 900, 50, { 
        isStatic: true,
        render: {
            fillStyle: 'transparent',
            lineWidth: 1
        } 
    }));

    // create a stack with varying body categories (but these bodies can all collide with each other)
    World.add(world,
        Composites.stack(275, 100, 5, 9, 10, 10, function(x: any, y: any, column: any, row: number) {
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

            let sides = Math.round(Common.random(1, 8));

            // triangles can be a little unstable, so avoid until fixed
            sides = (sides === 3) ? 4 : sides;

            switch (Math.round(Common.random(0, 1))) {
            case 0:
                if (Common.random() < 0.8) {
                    return Bodies.rectangle(x, y, Common.random(25, 50), Common.random(25, 50), {      
                            collisionFilter: {
                                category: category
                            },
                            render: {
                                strokeStyle: 'transparent',
                                opacity: 0.6,
                                fillStyle: Common.choose(['#FFB7D5', '#26C58C', '#FFD84C', '#FF8C4C', '#62CFF1']),
                                lineWidth: 1
                            } });
                } else {
                    return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30), { collisionFilter: {
                        category: category
                    },
                    render: {
                        strokeStyle: 'transparent',
                        opacity: 0.6,
                        fillStyle: Common.choose(['#FFB7D5', '#26C58C', '#FFD84C', '#FF8C4C', '#62CFF1']),
                        lineWidth: 1 }});
                }
            case 1:
                return Bodies.polygon(x, y, sides, Common.random(25, 50), { collisionFilter: {
                    category: category
                },
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

    // add mouse control
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

    // red category objects should not be draggable with the mouse
    mouseConstraint.collisionFilter.mask = defaultCategory | blueCategory | greenCategory | orangeCategory | yellowCategory;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });

  }, [])

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