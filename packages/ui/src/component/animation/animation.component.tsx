import React, { useEffect, useState, useRef } from "react"
import Matter from "matter-js"

const STATIC_DENSITY = 15
const PARTICLE_SIZE = 30
const PARTICLE_BOUNCYNESS = 0.9

export const MatterStepThree = () => {
  const boxRef = useRef(null)
  const canvasRef = useRef(null)

  const [constraints, setContraints] = useState()
  const [scene, setScene] = useState()

  const [someStateValue, setSomeStateValue] = useState(false)

  const handleResize = () => {
      if(boxRef && boxRef.current){
        setContraints(boxRef.current.getBoundingClientRect())
      }
  }

  const handleClick = () => {
    setSomeStateValue(!someStateValue)
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
        height: 500,
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
    blueCategory = 0x0008;

const redColor = '#C44D58',
    blueColor = '#4ECDC4',
    greenColor = '#C7F464';

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
    Composites.stack(275, 100, 5, 9, 10, 10, function(x, y, column, row) {
        let category = redCategory,
            color = redColor;

        if (row > 5) {
            category = blueCategory;
            color = blueColor;
        } else if (row > 2) {
            category = greenCategory;
            color = greenColor;
        }

        return Bodies.circle(x, y, 20, {
            collisionFilter: {
                category: category
            },
            render: {
                strokeStyle: color,
                opacity: 0.4,
                lineWidth: 1
            }
        });
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
mouseConstraint.collisionFilter.mask = defaultCategory | blueCategory | greenCategory;

// fit the render viewport to the scene
Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 500 }
});

    setContraints(boxRef.current.getBoundingClientRect())
    setScene(render)

    window.addEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (constraints) {
      const { width, height } = constraints

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