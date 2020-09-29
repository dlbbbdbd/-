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
