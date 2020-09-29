<template>
  <data-module :title="title">
  <div class="video-call-container">
    <video ref="localView" class="local-view" :src="localUrl" autoplay muted controls></video>
    <div class="remote-wrapper"
         @mousedown="startDrag"
         @mousemove="move"
         @mouseup="endMove"
         @mouseleave="endMove">
      <video ref="remoteView" class="remote-view" :src="localUrl"></video>
    </div>

  </div>
  </data-module>
</template>
<script>
  import dataModule from './dataModule'
export default {
  name: 'video_call_container',
  components: {dataModule},
  props: {
    localUrl: {
      type: String
    },
    remoteUrl: {
      type: String
    },
    title: ''
  },
  data() {
    return {
      mouseDownX: null,
      mouseDownY: null,
      initX: null,
      initY: null,
      isDown: false, // 表示鼠标已按下
    }
  },
  methods: {

    startDrag(e) {
      const target = e.currentTarget
      this.mouseDownX = e.pageX
      this.mouseDownY = e.pageY
      this.initX = target.offsetLeft
      this.initY = target.offsetTop
      this.isDown = true
      target.classList.add('back-floor')
    },

    move(e) {
      if(!this.isDown) return
      const target = e.currentTarget
      const parent = target.parentElement
      const mouseMoveX = e.pageX
      const mouseMoveY = e.pageY

      const left = parseInt(mouseMoveX) - parseInt(this.mouseDownX) + this.initX
      const top = parseInt(mouseMoveY) - parseInt(this.mouseDownY) + this.initY

      if(left > 0 && left <= parent.offsetWidth - target.offsetWidth) {
        target.style.left = left + 'px'
      } else {
        target.style.top = parent.offsetWidth - target.offsetWidth + 'px'
      }

      if (top > 0 && top <= parent.offsetHeight - target.offsetHeight) {
        target.style.top = top + 'px'
      } else {
        target.style.top = parent.offsetHeight - target.offsetHeight + 'px'
      }
    },

    endMove(e) {
      this.isDown = false
      e.currentTarget.classList.remove('back-floor')
    },

  }
}
</script>
<style lang="scss" scoped>
  .video-call-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .local-view {
    width: 100%;
    height: 100%;
  }
  .remote-wrapper {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: #0f9e60;
    width: 250px;
    height: 200px;
    overflow: visible;
    .remote-view {
      width: 100%;
      height: 100%;
    }
  }
  .back-floor:after {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    content: '';
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  }
</style>
