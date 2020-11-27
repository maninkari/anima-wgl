<template>
  <main>
    <h1>Anima</h1>
    <canvas id="anima"></canvas>
    <button @click="animate()">play</button>
  </main>
</template>

<script>
import * as THREE from 'three'

const WIDTH = 640.0
const HEIGHT = 480.0
const K = 1

export default {
  name: 'Anima',
  data() {
    return {
      renderer: {},
      scene: {},
      camera: {},
    }
  },
  mounted() {
    this.setCanvas()
    this.startWgl()
    this.geo2()
    this.animate()
  },
  methods: {
    setCanvas() {
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('anima'),
        antialias: false,
      })
      this.renderer.setSize(WIDTH, HEIGHT)
    },

    animate() {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    },

    startWgl() {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(45, 640.0 / 480.0, 1, 10000)

      this.camera.position.z = 1000.0
      this.camera.zoom = 1.0
    },

    geo() {
      const geometry = new THREE.PlaneGeometry(K * 640.0, K * 480.0)
      const material = new THREE.MeshBasicMaterial({
        color: '#0000ff',
        side: THREE.DoubleSide,
      })

      const plane = new THREE.Mesh(geometry, material)
      this.scene.add(plane)
    },

    geo2() {
      // A custom geometry
      const geometry = new THREE.BufferGeometry()

      // Define some vertices
      const verts = [
        new THREE.Vector3(-50.0, 50.0, 0.0),
        new THREE.Vector3(50.0, -50.0, 0.0),
        new THREE.Vector3(-50.0, -50.0, 0.0),
        new THREE.Vector3(50.0, 50.0, 0.0),
      ]

      // Flatten into buffer attribute
      const vertsFlat = verts.map((p) => p.toArray()).flat()
      const vertsArray = new Float32Array(vertsFlat)
      const vertsAttrib = new THREE.BufferAttribute(vertsArray, 3)
      geometry.addAttribute('position', vertsAttrib)

      // List of face
      const faces = [
        [0, 1, 2],
        [0, 3, 1],
      ]

      // Flatten into buffer attribute
      const facesFlat = faces.flat()
      const facesArray = new Uint16Array(facesFlat)
      const facesAttrib = new THREE.BufferAttribute(facesArray, 1)
      geometry.setIndex(facesAttrib)

      // Update the face normals
      geometry.computeVertexNormals()

      const material = new THREE.MeshNormalMaterial({
        side: THREE.DoubleSide,
      })

      // Create a mesh
      const mesh = new THREE.Mesh(geometry, material)

      // Add it to the scene
      this.scene.add(mesh)
    },
  },
}
</script>
