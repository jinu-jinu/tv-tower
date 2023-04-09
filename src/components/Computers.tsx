import * as THREE from 'three';
import { useMemo, useContext, createContext, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  useGLTF,
  Merged,
  RenderTexture,
  PerspectiveCamera,
  Text,
} from '@react-three/drei';
import SpinningBox from './SpinningBox';

// // 제거
// THREE.ColorManagement.legacyMode = false;
THREE.ColorManagement.enabled = true; // 이거 한 번 해보기

const Computers = () => {
  const { nodes, materials } = useGLTF('/models/computers_1-transformed.glb') as any;
  return (
    <group dispose={null} scale={0.5}>
      <group position={[-2.73, 0.63, -0.52]} rotation={[0, 1.09, 0]}>
        <mesh geometry={nodes.Object_212.geometry} material={materials.Texture} />
        <mesh geometry={nodes.Object_213.geometry} material={materials.Screen} />
      </group>
      <group position={[-1.43, 2.5, -1.8]} rotation={[0, 1, 0]}>
        <mesh geometry={nodes.Object_209.geometry} material={materials.Texture} />
        <mesh geometry={nodes.Object_210.geometry} material={materials.Screen} />
      </group>
      <group position={[-3.42, 3.06, 1.3]} rotation={[0, 1.22, 0]} scale={0.9}>
        <mesh geometry={nodes.Object_221.geometry} material={materials.Texture} />
        <mesh geometry={nodes.Object_222.geometry} material={materials.Screen} />
      </group>
      <group position={[0.27, 1.53, -2.61]}>
        <mesh geometry={nodes.Object_206.geometry} material={materials.Texture} />
        <mesh geometry={nodes.Object_207.geometry} material={materials.Screen} />
      </group>
      <group position={[3.11, 2.15, -0.18]} rotation={[0, -0.79, 0]} scale={0.81}>
        <mesh geometry={nodes.Object_218.geometry} material={materials.Texture} />
        <mesh geometry={nodes.Object_219.geometry} material={materials.Screen} />
      </group>
      <group position={[1.84, 0.38, -1.77]} rotation={[0, -Math.PI / 9, 0]}>
        <mesh geometry={nodes.Object_215.geometry} material={materials.Texture} />
        <mesh geometry={nodes.Object_216.geometry} material={materials.Screen} />
      </group>
      <group position={[-3.9, 4.29, -2.64]} rotation={[0, 0.54, 0]}>
        <mesh geometry={nodes.Object_224.geometry} material={materials.Texture} />
        <mesh geometry={nodes.Object_225.geometry} material={materials.Screen} />
      </group>
      <group position={[0.96, 4.28, -4.2]} rotation={[0, -0.65, 0]}>
        <mesh geometry={nodes.Object_227.geometry} material={materials.Texture} />
        <mesh geometry={nodes.Object_228.geometry} material={materials.Screen} />
      </group>
      <group position={[4.68, 4.29, -1.56]} rotation={[0, -Math.PI / 3, 0]}>
        <mesh geometry={nodes.Object_230.geometry} material={materials.Texture} />
        <mesh geometry={nodes.Object_231.geometry} material={materials.Screen} />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Texture}
        position={[0.16, 0.79, -1.97]}
        rotation={[-0.54, 0.93, -1.12]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.Texture}
        position={[-2.79, 0.27, 1.82]}
        rotation={[-1.44, 1.22, 1.43]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.Texture}
        position={[-5.6, 4.62, -0.03]}
        rotation={[-1.96, 0.16, 1.2]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.Texture}
        position={[2.62, 1.98, -2.47]}
        rotation={[-0.42, -0.7, -1.85]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.Texture}
        position={[4.6, 3.46, 1.19]}
        rotation={[-1.24, -0.72, 0.48]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.Texture}
        position={[0.63, 0, -3]}
        rotation={[0, 0.17, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.Texture}
        position={[-2.36, 0.32, -2.02]}
        rotation={[0, 0.53, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials.Texture}
        position={[-2.42, 0.94, -2.25]}
        rotation={[0, 0.14, Math.PI / 2]}
        scale={-1.52}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.Texture}
        position={[-3.53, 0, 0.59]}
        rotation={[Math.PI, -1.09, Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_36.geometry}
        material={materials.Texture}
        position={[-3.53, 1.53, 0.59]}
        rotation={[0, 0.91, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_40.geometry}
        material={materials.Texture}
        position={[3.42, 0, 0]}
        rotation={[-Math.PI, 1.13, -Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_48.geometry}
        material={materials.Texture}
        position={[4.09, 2.18, 2.41]}
        rotation={[0, -1.55, 1.57]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_52.geometry}
        material={materials.Texture}
        position={[4.31, 1.57, 2.34]}
        rotation={[0, -1.15, -Math.PI / 2]}
        scale={-1.52}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials.Texture}
        position={[-3.79, 0, 1.66]}
        rotation={[Math.PI, -1.39, 0]}
        scale={-1.52}
      />
      <mesh
        geometry={nodes.Object_60.geometry}
        material={materials.Texture}
        position={[-3.79, 1.53, 1.66]}
        rotation={[0, 1.22, -Math.PI]}
        scale={-1.52}
      />
      <mesh
        geometry={nodes.Object_62.geometry}
        material={materials.Texture}
        position={[-3.69, 0, 2.59]}
        rotation={[0, -1.57, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_64.geometry}
        material={materials.Texture}
        position={[-5.36, 2.18, 0.81]}
        rotation={[0, 0.77, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_68.geometry}
        material={materials.Texture}
        position={[-5.56, 1.57, 0.69]}
        rotation={[0, 1.17, -Math.PI / 2]}
        scale={-1.52}
      />
      <mesh
        geometry={nodes.Object_72.geometry}
        material={materials.Texture}
        position={[-5.47, 2.79, 0.74]}
        rotation={[Math.PI, -1.16, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_76.geometry}
        material={materials.Texture}
        position={[-5.29, 3.41, 0.89]}
        rotation={[Math.PI, -0.76, -Math.PI / 2]}
        scale={-1.52}
      />
      <mesh
        geometry={nodes.Object_80.geometry}
        material={materials.Texture}
        position={[-5.28, 0, -2.33]}
        rotation={[0, 0.75, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_84.geometry}
        material={materials.Texture}
        position={[-5.49, 0, -1.38]}
        rotation={[Math.PI, -0.99, Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_88.geometry}
        material={materials.Texture}
        position={[-3.01, 0, -3.79]}
        rotation={[0, 0.6, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_92.geometry}
        material={materials.Texture}
        position={[-2.08, 0, -4.32]}
        rotation={[Math.PI, -0.6, Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_94.geometry}
        material={materials.Texture}
        position={[-1.02, 0, -4.49]}
        rotation={[0, 0.31, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_98.geometry}
        material={materials.Texture}
        position={[-5.31, 1.83, -1.41]}
        rotation={[0, 1.06, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_100.geometry}
        material={materials.Texture}
        position={[-4.18, 1.83, -3.06]}
        rotation={[-Math.PI, -0.46, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_102.geometry}
        material={materials.Texture}
        position={[-1.76, 1.83, -3.6]}
        rotation={[0, -1.16, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_104.geometry}
        material={materials.Texture}
        position={[-0.25, 1.83, -5.54]}
        rotation={[0, 1.55, 1.57]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_108.geometry}
        material={materials.Texture}
        position={[-5.28, 2.14, -2.33]}
        rotation={[Math.PI, -0.75, Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_112.geometry}
        material={materials.Texture}
        position={[-5.49, 2.14, -1.38]}
        rotation={[0, 0.99, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_116.geometry}
        material={materials.Texture}
        position={[-3.01, 2.14, -3.79]}
        rotation={[Math.PI, -0.6, Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_120.geometry}
        material={materials.Texture}
        position={[-2.08, 2.14, -4.32]}
        rotation={[0, 0.6, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_122.geometry}
        material={materials.Texture}
        position={[-1.02, 2.14, -4.49]}
        rotation={[Math.PI, -0.31, Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_126.geometry}
        material={materials.Texture}
        position={[-5.31, 3.98, -1.41]}
        rotation={[0, 1.06, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_128.geometry}
        material={materials.Texture}
        position={[-4.18, 3.98, -3.06]}
        rotation={[-Math.PI, -0.46, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_130.geometry}
        material={materials.Texture}
        position={[-1.17, 3.98, -4.45]}
        rotation={[0, 0.17, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_132.geometry}
        material={materials.Texture}
        position={[-0.94, 3.98, -4.66]}
        rotation={[Math.PI, 0.02, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_140.geometry}
        material={materials.Texture}
        position={[5.53, 2.18, 0.17]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_144.geometry}
        material={materials.Texture}
        position={[5.74, 1.57, 0.05]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_148.geometry}
        material={materials.Texture}
        position={[5.65, 2.79, 0.11]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_152.geometry}
        material={materials.Texture}
        position={[5.46, 3.41, 0.26]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_156.geometry}
        material={materials.Texture}
        position={[4.86, 0, -2.54]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_160.geometry}
        material={materials.Texture}
        position={[5.06, 0, -1.6]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_164.geometry}
        material={materials.Texture}
        position={[2.59, 0, -4]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_168.geometry}
        material={materials.Texture}
        position={[1.66, 0, -4.54]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_170.geometry}
        material={materials.Texture}
        position={[0.59, 0, -4.7]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_172.geometry}
        material={materials.Texture}
        position={[4.89, 1.83, -1.62]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_174.geometry}
        material={materials.Texture}
        position={[3.75, 1.83, -3.28]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_176.geometry}
        material={materials.Texture}
        position={[1.33, 1.83, -3.82]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_180.geometry}
        material={materials.Texture}
        position={[4.86, 2.14, -2.54]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_184.geometry}
        material={materials.Texture}
        position={[5.06, 2.14, -1.6]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_188.geometry}
        material={materials.Texture}
        position={[2.59, 2.14, -4]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_192.geometry}
        material={materials.Texture}
        position={[1.66, 2.14, -4.54]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_194.geometry}
        material={materials.Texture}
        position={[0.59, 2.14, -4.7]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_196.geometry}
        material={materials.Texture}
        position={[4.89, 3.98, -1.62]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_198.geometry}
        material={materials.Texture}
        position={[3.75, 3.98, -3.28]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_200.geometry}
        material={materials.Texture}
        position={[0.75, 3.98, -4.66]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.Texture}
        position={[-0.19, 0, -2.96]}
        rotation={[0, -0.06, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.Texture}
        position={[-2.29, 1.56, -2.26]}
        rotation={[0, -0.01, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials.Texture}
        position={[-2.19, 2.19, -1.87]}
        rotation={[0, 0.51, Math.PI / 2]}
        scale={-1.52}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials.Texture}
        position={[-2.9, 0.3, -1.47]}
        rotation={[Math.PI, -1.35, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials.Texture}
        position={[3.22, 0, -0.8]}
        rotation={[0, -1.32, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_44.geometry}
        material={materials.Texture}
        position={[3.53, 1.83, 0.44]}
        rotation={[-Math.PI, 1.32, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_50.geometry}
        material={materials.Texture}
        position={[4.26, 0.94, 2.22]}
        rotation={[0, -1, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials.Texture}
        position={[3.87, 0.32, 2.35]}
        rotation={[0, -1.53, -1.57]}
        scale={-1.52}
      />
      <mesh
        geometry={nodes.Object_66.geometry}
        material={materials.Texture}
        position={[-5.61, 0.94, 0.82]}
        rotation={[0, 1.32, 1.57]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_70.geometry}
        material={materials.Texture}
        position={[-5.26, 0.32, 1.01]}
        rotation={[0, 0.79, -Math.PI / 2]}
        scale={-1.52}
      />
      <mesh
        geometry={nodes.Object_74.geometry}
        material={materials.Texture}
        position={[-5.39, 4.03, 0.99]}
        rotation={[Math.PI, -0.61, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_78.geometry}
        material={materials.Texture}
        position={[-5.7, 4.66, 0.72]}
        rotation={[Math.PI, -1.13, -Math.PI / 2]}
        scale={-1.52}
      />
      <mesh
        geometry={nodes.Object_82.geometry}
        material={materials.Texture}
        position={[-5.95, 0, -0.64]}
        rotation={[0, 0.95, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_86.geometry}
        material={materials.Texture}
        position={[-4.48, 0, -2.75]}
        rotation={[Math.PI, -0.57, Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_90.geometry}
        material={materials.Texture}
        position={[-3.72, 0, -2.89]}
        rotation={[0, 0.64, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_96.geometry}
        material={materials.Texture}
        position={[-0.08, 0, -5.03]}
        rotation={[Math.PI, -0.04, Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_106.geometry}
        material={materials.Texture}
        position={[-4.19, 1.84, -2.77]}
        rotation={[Math.PI, -0.66, -Math.PI / 2]}
        scale={-1.52}
      />
      <mesh
        geometry={nodes.Object_110.geometry}
        material={materials.Texture}
        position={[-5.95, 2.14, -0.64]}
        rotation={[Math.PI, -0.95, Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_114.geometry}
        material={materials.Texture}
        position={[-4.48, 2.14, -2.75]}
        rotation={[0, 0.57, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_118.geometry}
        material={materials.Texture}
        position={[-3.73, 2.14, -3.1]}
        rotation={[Math.PI, -0.64, Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_124.geometry}
        material={materials.Texture}
        position={[-0.08, 2.14, -5.03]}
        rotation={[0, 0.04, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_134.geometry}
        material={materials.Texture}
        position={[-4.19, 3.98, -2.77]}
        rotation={[Math.PI, -0.66, -Math.PI / 2]}
        scale={-1.52}
      />
      <mesh
        geometry={nodes.Object_142.geometry}
        material={materials.Texture}
        position={[5.79, 0.94, 0.18]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_146.geometry}
        material={materials.Texture}
        position={[5.43, 0.32, 0.37]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_150.geometry}
        material={materials.Texture}
        position={[5.56, 4.03, 0.35]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_154.geometry}
        material={materials.Texture}
        position={[5.87, 4.66, 0.08]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_158.geometry}
        material={materials.Texture}
        position={[5.53, 0, -0.85]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_162.geometry}
        material={materials.Texture}
        position={[4.05, 0, -2.96]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_166.geometry}
        material={materials.Texture}
        position={[3.29, 0, -3.1]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_178.geometry}
        material={materials.Texture}
        position={[3.77, 1.84, -2.98]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_182.geometry}
        material={materials.Texture}
        position={[5.53, 2.14, -0.85]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_186.geometry}
        material={materials.Texture}
        position={[4.05, 2.14, -2.96]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_190.geometry}
        material={materials.Texture}
        position={[3.3, 2.14, -3.31]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_202.geometry}
        material={materials.Texture}
        position={[3.77, 3.98, -2.98]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials.Texture}
        position={[0.35, 2.35, -3.34]}
        rotation={[-0.26, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials.Texture}
        position={[0.18, 2.8, -2.85]}
        rotation={[0.09, 0.15, -0.01]}
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials.Texture}
        position={[1.89, 0, -1.94]}
        rotation={[0, -0.44, 0]}
        scale={[1.5, 1, 1.5]}
      />
      <mesh
        geometry={nodes.Object_46.geometry}
        material={materials.Texture}
        position={[1.86, 1.61, -1.81]}
        rotation={[0, -Math.PI / 3, 0]}
      />
      <mesh
        geometry={nodes.Object_56.geometry}
        material={materials.Texture}
        position={[3.95, 2.49, 1.61]}
        rotation={[0, -Math.PI / 3, 0]}
      />
      <mesh
        geometry={nodes.Object_136.geometry}
        material={materials.Texture}
        position={[-1.1, 4.29, -4.43]}
        rotation={[0, 0.36, 0]}
      />
      <mesh
        geometry={nodes.Object_138.geometry}
        material={materials.Texture}
        position={[-5.25, 4.29, -1.47]}
        rotation={[0, 1.25, 0]}
      />
      <mesh
        geometry={nodes.Object_204.geometry}
        material={materials.Texture}
        position={[3.2, 4.29, -3.09]}
        rotation={[-Math.PI, 0.56, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Sphere.geometry}
        material={materials.led}
        position={[-0.41, 1.1, -2.21]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={materials.led}
        position={[0.59, 1.32, -2.22]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Sphere002.geometry}
        material={materials.led}
        position={[1.77, 1.91, -1.17]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Sphere003.geometry}
        material={materials.led}
        position={[2.44, 1.1, -0.79]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Sphere004.geometry}
        material={materials.led}
        position={[4.87, 3.8, -0.1]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Sphere005.geometry}
        material={materials.led}
        position={[1.93, 3.8, -3.69]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Sphere006.geometry}
        material={materials.led}
        position={[-2.35, 3.8, -3.48]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Sphere007.geometry}
        material={materials.led}
        position={[-4.71, 4.59, -1.81]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Sphere008.geometry}
        material={materials.led}
        position={[-3.03, 2.85, 1.19]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Sphere009.geometry}
        material={materials.led}
        position={[-1.21, 1.73, -1.49]}
        scale={0.01}
      />
      <ScreenInteractive
        frame="Object_206"
        panel="Object_207"
        position={[0.27, 1.53, -2.61]}
      />
      <ScreenText
        invert={false}
        frame="Object_209"
        panel="Object_210"
        y={5}
        position={[-1.43, 2.5, -1.8]}
        rotation={[0, 1, 0]}
      />
      <ScreenText
        invert
        frame="Object_212"
        panel="Object_213"
        x={-5}
        y={5}
        position={[-2.73, 0.63, -0.52]}
        rotation={[0, 1.09, 0]}
      />
      <ScreenText
        invert
        frame="Object_215"
        panel="Object_216"
        position={[1.84, 0.38, -1.77]}
        rotation={[0, -Math.PI / 9, 0]}
      />
      <ScreenText
        invert
        frame="Object_218"
        panel="Object_219"
        x={-5}
        position={[3.11, 2.15, -0.18]}
        rotation={[0, -0.79, 0]}
        scale={0.81}
      />
      <ScreenText
        invert={false}
        frame="Object_221"
        panel="Object_222"
        y={5}
        position={[-3.42, 3.06, 1.3]}
        rotation={[0, 1.22, 0]}
        scale={0.9}
      />
      <ScreenText
        invert
        frame="Object_224"
        panel="Object_225"
        position={[-3.9, 4.29, -2.64]}
        rotation={[0, 0.54, 0]}
      />
      <ScreenText
        invert={false}
        frame="Object_227"
        panel="Object_228"
        position={[0.96, 4.28, -4.2]}
        rotation={[0, -0.65, 0]}
      />
      <ScreenText
        invert={false}
        frame="Object_230"
        panel="Object_231"
        position={[4.68, 4.29, -1.56]}
        rotation={[0, -Math.PI / 3, 0]}
      />
      {/* <Leds instances={instances} /> */}
    </group>
  );
};

export default Computers;

/* This component renders a monitor (taken out of the gltf model)
   It renders a custom scene into a texture and projects it onto monitors screen */
function Screen({ frame, panel, children, ...props }) {
  const { nodes, materials } = useGLTF('/models/computers_1-transformed.glb') as any;
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[frame].geometry}
        material={materials.Texture}
      />
      <mesh geometry={nodes[panel].geometry}>
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture
            width={512}
            height={512}
            attach="map"
            anisotropy={16}
            sourceFile={''}
          >
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}

/* Renders a monitor with some text */
function ScreenText({ invert, x = 0, y = 1.2, ...props }) {
  const textRef = useRef<any>();
  const rand = Math.random() * 10000;
  useFrame(
    state =>
      (textRef.current.position.x = x + Math.sin(rand + state.clock.elapsedTime / 4) * 8)
  );
  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 15]} />
      <color attach="background" args={[invert ? 'black' : '#35c19f']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text
        font="/Inter-Medium.woff"
        position={[x, y, 0]}
        ref={textRef}
        fontSize={4}
        letterSpacing={-0.1}
        color={!invert ? 'black' : '#35c19f'}
      >
        Poimandres.
      </Text>
    </Screen>
  );
}

/* Renders a monitor with a spinning box */
function ScreenInteractive(props) {
  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
      <color attach="background" args={['orange']} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.75} />
      <pointLight position={[-10, -10, -10]} />
      <SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} />
    </Screen>
  );
}

// Renders flashing LED's
function Leds({ instances }) {
  const ref = useRef<any>();
  const { nodes } = useGLTF('/computers_1-transformed.glb') as any;
  useMemo(() => {
    nodes.Sphere.material = new THREE.MeshBasicMaterial();
    nodes.Sphere.material.toneMapped = false;
  }, []);
  useFrame(state => {
    ref.current.children.forEach(instance => {
      const rand = Math.abs(2 + instance.position.x);
      const t = Math.round(
        (1 + Math.sin(rand * 10000 + state.clock.elapsedTime * rand)) / 2
      );
      instance.color.setRGB(0, t * 1.1, t);
    });
  });
  return (
    <group ref={ref}>
      <instances.Sphere position={[-0.41, 1.1, -2.21]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[0.59, 1.32, -2.22]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[1.77, 1.91, -1.17]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[2.44, 1.1, -0.79]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[4.87, 3.8, -0.1]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[1.93, 3.8, -3.69]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[-2.35, 3.8, -3.48]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[-4.71, 4.59, -1.81]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[-3.03, 2.85, 1.19]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[-1.21, 1.73, -1.49]} scale={0.005} color={[1, 2, 1]} />
    </group>
  );
}
