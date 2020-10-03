/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from "react"
import Matter from "matter-js"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
    const Composites = Matter.Composites
    const Common = Matter.Common

    const engine = Engine.create({})
    const world = engine.world
    // create renderer
    const render = Render.create({
        element: document.body,
        engine: engine,
        options: {
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
        Composites.stack(100, 0, 4, 7, 20, 20, function(x: any, y: any) {

            const sides = Math.round(Common.random(1, 8));

            switch (Math.round(Common.random(0, 1))) {
            case 0:
                if (Common.random() < 0.8) {
                    return Bodies.rectangle(x, y, Common.random(25, 80), Common.random(25, 80), {      
                            render: {
                                strokeStyle: 'transparent',
                                opacity: 0.7,
                                fillStyle: Common.choose(['#FFB7D5', '#26C58C', '#FFD84C', '#FF8C4C', '#62CFF1']),
                                lineWidth: 1
                            } });
                } 
                else if (Common.random() < 0.6) {
                    return Bodies.trapezoid(x, y, Common.random(25, 80), Common.random(25, 80), Common.random(0, 1), {      
                            render: {
                                strokeStyle: 'transparent',
                                opacity: 0.8,
                                fillStyle: Common.choose(['#FFB7D5', '#26C58C', '#FFD84C', '#FF8C4C', '#62CFF1']),
                                lineWidth: 1
                            } });
                } else {
                    return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30), { 
                    render: {
                        strokeStyle: 'transparent',
                        opacity: Common.random(0.6, 1),
                        fillStyle: Common.choose(['#FFB7D5', '#26C58C', '#FFD84C', '#FF8C4C', '#62CFF1']),
                        lineWidth: 1 }});
                }
            case 1:
                return Bodies.polygon(x, y, sides, Common.random(25, 80), { 
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
        Bodies.circle(310, 40, 60, {
            // collisionFilter: {
            //     mask: defaultCategory | greenCategory
            // },
            render: {
                fillStyle: greenColor
            }
        })
    );

    // this body will only collide with the walls and the red bodies
    World.add(world,
        Bodies.circle(400, 40, 40, {
            // collisionFilter: {
            //     mask: defaultCategory | redCategory
            // },
            render: {
                fillStyle: redColor
            }
        })
    );

      // this body will only collide with the walls and the orange bodies
      World.add(world,
        Bodies.circle(400, 40, 50, {
            // collisionFilter: {
            //     mask: defaultCategory | orangeCategory
            // },
            render: {
                fillStyle: orangeColor
            }
        })
    );

    // this body will only collide with the walls and the blue bodies
    World.add(world,
        Bodies.circle(480, 40, 30, {
            // collisionFilter: {
            //     mask: defaultCategory | blueCategory
            // },
            render: {
                fillStyle: blueColor
            }
        })
    );

      // this body will only collide with the walls and the yellow bodies
      World.add(world,
        Bodies.circle(480, 40, 50, {
            // collisionFilter: {
            //     mask: defaultCategory | yellowCategory
            // },
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
        <svg width="100%" height="100%" viewBox="0 0 1274 692" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M890.457 598.751C845.375 609.91 813.409 578.998 804.354 542.415C795.299 505.833 809.154 463.579 854.236 452.42C873.081 447.755 889.787 450.287 903.064 457.981C908.874 460.856 915.339 460.04 919.689 455.434L945.606 427.058C951.53 420.885 950.169 410.634 942.793 406.185C913.659 388.298 877.204 382.027 839.143 391.448C762.652 410.382 722.14 481.196 741.165 558.056C760.099 634.548 828.966 678.286 905.457 659.353C943.518 649.931 972.93 627.749 990.356 598.337C994.714 590.592 991.227 581.258 983.108 578.562L946.946 565.552C940.95 563.507 934.851 565.801 931.053 571.055C922.806 583.684 909.302 594.086 890.457 598.751Z" fill="black"/>
            <path d="M617.505 645.337L654.73 662.788C661.279 665.859 668.668 661.755 669.164 654.42L693.188 398.707C693.867 391.878 689.946 384.995 683.397 381.925L635.487 359.464C628.938 356.394 621.14 357.783 616.325 362.673L434.784 544.538C429.807 549.773 431.379 558.078 437.584 560.987L475.153 578.6C482.047 581.832 490.007 580.098 494.984 574.863L521.828 545.405L613.167 588.226L607.693 627.703C606.853 634.877 610.611 642.105 617.505 645.337ZM556.805 507.567L635.354 421.626L619.88 537.138L556.805 507.567Z" fill="black"/>
            <path d="M473.753 348.146L315.887 309.414C308.493 307.6 301.126 312.064 299.312 319.458L291.148 352.732C289.425 359.757 293.889 367.123 301.283 368.938L348.606 380.548L302.98 566.512C301.166 573.907 305.63 581.273 312.654 582.997L349.625 592.068C357.019 593.882 364.386 589.418 366.2 582.023L411.826 396.059L459.149 407.67C466.543 409.484 473.91 405.02 475.634 397.995L483.797 364.722C485.611 357.327 481.147 349.961 473.753 348.146Z" fill="black"/>
            <path d="M179.128 436.443C162.619 422.929 135.352 405.508 143.794 386.348C149.934 372.413 165.922 368.226 183.34 375.9C199.713 383.114 206.397 394.379 207.437 405.237C208.229 410.993 212.882 415.539 218.567 416.797L253.798 422.752C262.23 424.386 269.746 417.714 269.68 409.366C269.447 373.072 245.267 342.035 208.341 325.766C157.829 303.51 106.533 314.189 85.8126 361.217C67.8547 401.976 80.3267 434.094 123.725 467.775C148.176 486.867 170.79 499.743 162.655 518.206C155.595 534.231 137.085 535.643 116.532 526.587C95.9787 517.532 87.5817 502.6 86.2642 489.54C85.4312 482.933 80.43 478.234 74.0888 477.52L38.0903 473.307C30.0487 472.676 22.84 478.651 22.7107 486.498C22.383 528.784 54.5632 559.602 94.9731 577.407C155.936 604.267 206.233 583.581 223.731 543.868C240.614 505.548 231.331 479.41 179.128 436.443Z" fill="black"/>
            <path d="M823.673 63.9985L738.256 70.3403C730.664 70.904 725.041 77.4291 725.604 85.0217L743.305 323.429C743.869 331.022 750.394 336.645 757.986 336.081L795.949 333.263C803.162 332.727 808.785 326.202 808.222 318.61L803.374 253.313L837.54 250.777C895.244 246.492 940.556 214.117 935.905 151.478C931.649 94.1542 889.729 59.0942 823.673 63.9985ZM833.256 193.073L799.089 195.61L794.044 127.656L828.211 125.119C853.267 123.259 868.707 135.854 870.229 156.354C871.949 179.512 856.793 191.325 833.256 193.073Z" fill="black"/>
            <path d="M552.901 22.481C474.113 22.481 417.401 81.4878 417.401 160.291C417.401 239.474 474.113 298.481 552.901 298.481C631.689 298.481 688.401 239.474 688.401 160.291C688.401 81.4878 631.689 22.481 552.901 22.481ZM552.901 235.667C506.466 235.667 482.867 197.979 482.867 160.291C482.867 122.602 506.466 85.2947 552.901 85.2947C599.337 85.2947 622.935 122.602 622.935 160.291C622.935 197.979 599.337 235.667 552.901 235.667Z" fill="black"/>
            <path d="M304.608 28.7866L222.629 3.97057C215.343 1.7647 207.748 5.82957 205.542 13.1165L136.278 241.927C134.072 249.214 138.137 256.808 145.424 259.014L181.859 270.043C188.781 272.139 196.376 268.074 198.582 260.787L217.552 198.119L250.343 208.045C305.724 224.81 359.65 210.906 377.848 150.789C394.502 95.7726 368.004 47.9776 304.608 28.7866ZM267.108 152.665L234.317 142.738L254.059 77.5201L286.85 87.4465C310.897 94.7259 320.772 112.034 314.816 131.708C308.088 153.933 289.697 159.503 267.108 152.665Z" fill="black"/>
            <path d="M1267 588.683L1148.39 497.555L1192.27 366.319C1195 358.32 1187.6 351.029 1179.59 353.477L1137.72 366.272C1132.26 367.941 1128.31 371.936 1126.37 377.306L1086.05 505.862L1055.45 405.748C1053.22 398.467 1045.62 394.422 1038.34 396.647L1001.93 407.774C994.651 409.999 990.607 417.604 992.832 424.885L1062.71 653.51C1064.93 660.791 1072.54 664.835 1079.82 662.61L1116.22 651.484C1123.5 649.258 1127.55 641.653 1125.32 634.372L1093.72 530.981L1202.94 617.418C1207.19 620.896 1213.06 621.887 1218.52 620.218L1263.66 606.421C1271.67 603.973 1273.26 593.537 1267 588.683Z" fill="black"/>
        </svg>

        <canvas ref={canvasRef} />
      </div>
  )
}