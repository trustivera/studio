"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function HoneyJar3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xF7E7CE, 3, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const geometry = new THREE.TorusKnotGeometry(1, 0.2, 100, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0xE5BA10,
      metalness: 0.7,
      roughness: 0.1,
    });
    const model = new THREE.Mesh(geometry, material);
    scene.add(model);
    
    let mouseX = 0;
    const onMouseMove = (event: MouseEvent) => {
        const rect = currentMount.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / currentMount.clientWidth - 0.5) * 2;
    }
    currentMount.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      
      model.rotation.y = elapsedTime * 0.3 + mouseX * 0.5;
      model.rotation.x = elapsedTime * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeEventListener('mousemove', onMouseMove);
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
        className="relative w-full h-[400px] md:h-[500px] cursor-grab rounded-lg" 
        ref={mountRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute inset-0 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm rounded-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`}
      >
        <div className="text-center">
            <h4 className="font-headline text-2xl text-primary">Golden Reserve Honey</h4>
            <p className="font-body text-sm text-foreground mt-2">
                A complex, multi-floral honey with notes of wild berries and mountain herbs.
                <br/>
                Weight: 350g
            </p>
        </div>
      </div>
    </div>
  );
}
