<template>
  <main>
    <h1>Anima</h1>
    <canvas id="anima"></canvas>
  </main>
</template>

<script>
import * as THREE from 'three'

const WIDTH = 640.0
const HEIGHT = 480.0

export default {
  name: 'Anima',
  data() {
    return {
      renderer: {},
    }
  },
  mounted() {
    this.startWgl()
  },
  methods: {
    startWgl() {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(60, 640.0 / 480.0, 1, 1000)

      camera.position.z = 640.0
      camera.zoom = 1.0

      const geometry = new THREE.PlaneGeometry(480.0, 360.0)
      const material = new THREE.MeshBasicMaterial({
        color: '#ff0000',
        side: THREE.DoubleSide,
      })

      const plane = new THREE.Mesh(geometry, material)
      scene.add(plane)

      this.renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('anima'),
        antialias: false,
      })
      this.renderer.setSize(WIDTH, HEIGHT)

      const animate = () => {
        requestAnimationFrame(animate)
        this.renderer.render(scene, camera)
      }

      animate()
    },
  },
}
</script>
