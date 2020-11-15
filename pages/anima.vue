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
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('anima'),
        antialias: false,
      })
      this.renderer.setSize(WIDTH, HEIGHT)
    },
  },
}
</script>
