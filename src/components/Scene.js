import React, { useState, useEffect, useRef, Suspense, useMemo } from "react"
import * as THREE from "three"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import glsl from "babel-plugin-glsl/macro"

const WaveShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
    uMouse: new THREE.Vector2(0, 0),
  },
  // Vertex Shader
  glsl`
    precision mediump float;

    uniform float uTime;
    uniform vec2 uMouse;

    varying vec2 vUv;
    
    void main(){
      vUv = uv;

      vec3 pos = position;
      float freq = 20.;
      float amp =  30.;
      float timeFactor = uTime * 0.1 + abs(uMouse.x) + abs(uMouse.y);
      // float timeFactor = uTime * 0.1 ;
      pos.z = (sin((uv.x +  timeFactor) * (freq ) * 0.4) + sin((uv.y  + timeFactor) * (freq ) * 0.4 )) * (amp);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    // uniform vec2 uMouse;

    varying vec2 vUv;

    void main(){     
      gl_FragColor = vec4(vUv.x , 1. , vUv.y,1.0);
    }
  `
)

extend({ WaveShaderMaterial })

const Wave = ({ width, height }) => {
  const [mouse, setMouse] = useState(new THREE.Vector2(0, 0))
  const shaderMaterialRef = useRef()
  useFrame(
    ({ clock }) => (shaderMaterialRef.current.uTime = clock.getElapsedTime())
  )

  useEffect(() => {
    window.addEventListener("mousemove", e => {
      let mouseX = (e.offsetX / window.innerWidth - 0.5) * 2
      let mouseY = (e.offsetY / window.innerHeight - 0.5) * -2

      setMouse(mouseX, mouseY)
    })
  }, [])

  return (
    <mesh position={[0, -300, 0]} rotation={[-Math.PI / 4, 0, 0]}>
      <planeBufferGeometry args={[width * 1.5, height, 20, 20]} />

      <waveShaderMaterial
        ref={shaderMaterialRef}
        uColor={"hotpink"}
        uMouse={new THREE.Vector2(mouse)}
        wireframe={true}
      />
    </mesh>
  )
}

export default function Scene() {
  const [fov, setFov] = useState(
    (2 * (Math.atan(650 / 2 / 600) * 180)) / Math.PI
  )
  const [aspect, setAspect] = useState(16 / 9)
  const [sizes, setSizes] = useState({ width: 400, height: 400 })

  useEffect(() => {
    setSizes({ width: window.innerWidth, height: window.innerHeight })

    window.addEventListener("resize", () => {
      setFov((2 * (Math.atan(window.innerHeight / 2 / 600) * 180)) / Math.PI)
      setAspect(window.innerWidth / window.innerHeight)
      setSizes({ width: window.innerWidth, height: window.innerHeight })
    })
  }, [])

  return (
    <div className="canvas">
      <Canvas
        camera={{
          fov: fov,
          near: 0.1,
          far: 1000,
          position: [0, 0, 600],
          aspect: aspect,
        }}
      >
        <Suspense fallback={null}>
          <Wave width={sizes.width} height={sizes.height} />
        </Suspense>
      </Canvas>
    </div>
  )
}
