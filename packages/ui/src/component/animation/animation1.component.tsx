/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef, createRef } from "react";
import 'pathseg';
import Matter from "matter-js";
import { IReactProps } from "../../interface/reactProps.interface";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Animation: React.FunctionComponent<IReactProps> = ({children}: IReactProps) => {
  const boxRef = useRef<any>(null);
  const canvasRef = createRef<HTMLCanvasElement>();
  const STATIC_DENSITY = 15;

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
    // const Vertices = Matter.Vertices;
        // const Svg = Matter.Svg;
    // const MouseConstraint = Matter.MouseConstraint
    //     const Mouse = Matter.Mouse

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
    // const defaultCategory = 0x0001,
    //     redCategory = 0x0002,
    //     greenCategory = 0x0004,
    //     blueCategory = 0x0008,
    //     orangeCategory = 0x0010,
    //     yellowCategory = 0x0012;

    // const redColor = "#FFB7D5",
    //   blueColor = "#62CFF1",
    //   greenColor = "#26C58C",
    //   yellowColor = "#FFD84C",
    //   orangeColor = "#FF8C4C";

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


  //   const svgs = [
  //     <path opacity="0.9" d="M801.389 298.347C799.767 297.778 798.689 296.236 798.713 294.517L800.054 197.559C800.092 194.826 802.798 192.935 805.377 193.84L896.882 225.925C898.505 226.494 899.582 228.036 899.558 229.755L898.217 326.713C898.18 329.445 895.473 331.336 892.894 330.432L801.389 298.347Z" fill="#26C58C"/>
  // ];

  // get path
        // const path = <path xmlns="http://www.w3.org/2000/svg" d="m 254.77158,81.322345 0,-17.36718 44.85937,0 0,41.062505 c -4.35947,4.21876 -10.67587,7.9336 -18.94922,11.14453 -8.27351,3.21093 -16.65241,4.8164 -25.13672,4.8164 -10.78129,0 -20.17972,-2.26172 -28.19531,-6.78515 -8.01565,-4.52343 -14.03908,-10.99217 -18.07031,-19.406255 -4.03126,-8.41403 -6.04688,-17.56637 -6.04688,-27.45703 0,-10.73432 2.25,-20.27337 6.75,-28.61719 4.49999,-8.34366 11.08592,-14.74209 19.75782,-19.19531 6.60933,-3.42178 14.83589,-5.13271 24.67968,-5.13282 12.79681,1.1e-4 22.79289,2.6837 29.98829,8.05078 7.19521,5.36728 11.82412,12.78524 13.88671,22.25391 l -20.67187,3.86719 c -1.4532,-5.06243 -4.18367,-9.05852 -8.19141,-11.98828 -4.00788,-2.92961 -9.01178,-4.39445 -15.01172,-4.39453 -9.09379,8e-5 -16.32426,2.88289 -21.6914,8.64843 -5.36722,5.7657 -8.05081,14.32038 -8.05078,25.66407 -3e-5,12.23441 2.71872,21.41018 8.15625,27.52734 5.43746,6.117215 12.56245,9.175805 21.375,9.175785 4.35931,2e-5 8.7304,-0.85545 13.11328,-2.56641 4.38274,-1.710915 8.14445,-3.785135 11.28515,-6.222655 l 0,-13.07813 z"/>;



      // const points = Svg.pathToVertices(path, 30);
      // const points = [{"x":254.77158,"y":81.322345},{"x":254.77158,"y":63.955164999999994},{"x":299.63095,"y":63.955164999999994},{"x":299.63095,"y":105.01767},{"x":285.6684875488281,"y":114.0570297241211},{"x":280.68172999999996,"y":116.1622},{"x":266.6499328613281,"y":120.05164337158203},{"x":255.54500999999996,"y":120.9786},{"x":246.7241668701172,"y":120.43514251708984},{"x":227.77230834960938,"y":114.42903900146484},{"x":227.34969999999996,"y":114.19345},{"x":213.0035400390625,"y":101.21031951904297},{"x":209.27938999999995,"y":94.787195},{"x":205.06021118164062,"y":82.97329711914062},{"x":203.23250999999996,"y":67.330165},{"x":203.3513946533203,"y":63.11982727050781},{"x":207.62828063964844,"y":43.67826843261719},{"x":209.98250999999996,"y":38.71297499999999},{"x":218.74041748046875,"y":27.23160171508789},{"x":229.74032999999997,"y":19.517664999999994},{"x":235.75440979003906,"y":17.019094467163086},{"x":254.42000999999996,"y":14.384844999999995},{"x":255.49185180664062,"y":14.391326904296875},{"x":275.1495056152344,"y":17.53614616394043},{"x":284.40829999999994,"y":22.435624999999995},{"x":291.1848449707031,"y":29.03408432006836},{"x":298.29500999999993,"y":44.68953499999999},{"x":277.6231399999999,"y":48.55672499999999},{"x":277.1264953613281,"y":47.006927490234375},{"x":269.4317299999999,"y":36.568445},{"x":263.3687438964844,"y":33.487857818603516},{"x":254.4200099999999,"y":32.173914999999994},{"x":243.67039489746094,"y":33.790550231933594},{"x":232.7286099999999,"y":40.82234499999999},{"x":228.80250549316406,"y":46.41484832763672},{"x":224.6812744140625,"y":65.7984390258789},{"x":224.6778299999999,"y":66.486415},{"x":227.70797729492188,"y":85.4487533569336},{"x":232.8340799999999,"y":94.01375499999999},{"x":240.62957763671875,"y":100.12921905517578},{"x":254.2090799999999,"y":103.18954},{"x":260.12408447265625,"y":102.665771484375},{"x":267.3223599999999,"y":100.62312999999999},{"x":278.2691955566406,"y":94.65968322753906},{"x":278.6075099999999,"y":94.40047499999999},{"x":278.6075099999999,"y":81.32234499999998}]

      // const vertexSets = [];
      // vertexSets.push(Vertices.scale(points, 0.4, 0.4));

    //   World.add(world, Bodies.fromVertices(100 + 0 * 150, 200 + 0 * 50, vertexSets, {
    //     render: {
    //         fillStyle: "#26C58C",
    //         strokeStyle: "#26C58C",
    //         lineWidth: 1
    //     }
    // }, true));
    

     // add mouse control
    // const mouse = Mouse.create(render.canvas),
    //     mouseConstraint = MouseConstraint.create(engine, {
    //         mouse: mouse,
    //         constraint: {
    //             stiffness: 0.2,
    //             render: {
    //                 visible: false
    //             }
    //         }
    //     });

    // World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    // render.mouse = mouse;
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
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY },
      ]);
    }
  }, [scene, constraints]);

  return (
    <div
      ref={boxRef}
      style={{
        zIndex: 3
      }}
    >
      <canvas ref={canvasRef}/>
      {children}

    
    </div>
  );
};
