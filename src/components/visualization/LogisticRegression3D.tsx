import React, { useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Logistic sigmoid
const sigmoid = (z: number) => 1 / (1 + Math.exp(-z));

const SigmoidCurve: React.FC<{ intercept: number; slope: number }> = ({ intercept, slope }) => {
  // Compute sampled points along the curve
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let z = -10; z <= 10; z += 0.2) {
      const val = sigmoid(intercept + slope * z);
      pts.push(new THREE.Vector3(z, val, 0));
    }
    return pts;
  }, [intercept, slope]);

  // Create a BufferGeometry for the line
  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setFromPoints(points);
    return geom;
  }, [points]);

  return (
    <>
      {/* Sigmoid line */}
      <primitive object={new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: 0x0000ff }))} />

      {/* Small spheres along the curve */}
      {points.map((p, idx) => (
        <mesh key={idx} position={p}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial />
        </mesh>
      ))}
    </>
  );
};

const LogisticRegression3D: React.FC = () => {
  const [intercept, setIntercept] = useState(0);
  const [slope, setSlope] = useState(1);
  const [zVal, setZVal] = useState(0);

  const sigmoidValue = sigmoid(intercept + slope * zVal);

  // Geometry for decision boundary
  const boundaryGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setFromPoints([
      new THREE.Vector3(-10, 0.5, 0),
      new THREE.Vector3(10, 0.5, 0),
    ]);
    return geom;
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Canvas camera={{ position: [0, 2, 15], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <gridHelper args={[20, 20]} />
        <axesHelper args={[3]} />

        {/* Sigmoid Curve */}
        <SigmoidCurve intercept={intercept} slope={slope} />

        {/* Decision Boundary */}
        <primitive
          object={new THREE.Line(
            boundaryGeometry,
            new THREE.LineBasicMaterial({ color: 0x00ff00 })
          )}
        />

        <OrbitControls />
        {/* <div></div> */}
      </Canvas>

      {/* Controls Panel */}
      <div
        style={{
          position: "absolute",
          top: "600px",
          maxWidth: "320px",
          backdropFilter: "blur(5px)",
          padding: "20px",
          background: "white",
          borderLeft: "2px solid #A9A9A9",
          boxShadow: "0 0 10px rgba(0,0,0,0.15)",
          borderRadius: "8px",
          height: "fit-content",
        }}
      >
        <h3 style={{ margin: "0 0 15px", color: "#2c3e50" }}>
          Logistic Regression Controls
        </h3>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold", color: "#34495e" }}>
            Intercept (β₀):{" "}
            <span style={{ color: "#e74c3c" }}>{intercept.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min={-5}
            max={5}
            step={0.1}
            value={intercept}
            onChange={(e) => setIntercept(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold", color: "#34495e" }}>
            Slope (β₁):{" "}
            <span style={{ color: "#e74c3c" }}>{slope.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min={-2}
            max={2}
            step={0.1}
            value={slope}
            onChange={(e) => setSlope(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold", color: "#34495e" }}>
            Input (z):{" "}
            <span style={{ color: "#e74c3c" }}>{zVal.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min={-10}
            max={10}
            step={0.1}
            value={zVal}
            onChange={(e) => setZVal(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>

        <div
          style={{
            background: "#ecf0f1",
            padding: "10px",
            borderRadius: "5px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          σ(z) = {sigmoidValue.toFixed(4)} <br />
          Classification:{" "}
          {sigmoidValue > 0.7
            ? "Class 1"
            : sigmoidValue < 0.3
            ? "Class 0"
            : "Undecided"}
        </div>
      </div>
    </div>
  );
};

export default LogisticRegression3D;
