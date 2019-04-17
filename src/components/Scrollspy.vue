<script>
import { throttle } from '@/assets/utils'
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    items: {
      type: Array,
      default: function() {
        return []
      }
    },
    el: {
      type: String
    },
    current: {
      type: String
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      targets: []
    }
  },
  computed: {
    rootEl() {
      return this.el ? document.querySelector(this.el) : window
    }
  },
  mounted() {
    this._init()
    this.onEvent()
  },
  beforeDestroy() {
    this.offEvent()
  },
  methods: {
    _init() {
      this.targets = this.items.map(node => {
        document.querySelector(node)
      })
      this._spy()
    },
    _isInView(el) {
      if (!el) {
        return false
      }

    },
    _getScrollDimensions() {
      const doc = document
      let scrollTop, scrollHeight
      if(this.el) {
        scrollTop = document.querySelector(this.el).scrollTop
        scrollHeight = document.querySelector(this.el).scrollHeight
      } else {
        scrollTop = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
        scrollHeight = document.documentElement.scrollHeight || document.body.parentNode.scrollHeight || document.body.scrollHeight
      }
      
      return {
        scrollTop,
        scrollHeight,
      }
    },
    _handleSpy() {
      throttle(this._spy, 200)
    },
    _spy() {
      const { targets } = this

      let hasInView = false
      let viewStatusList = []
      for (let i = 0; i < targets; i++) {
        const el = targets[i]
        let isInView = hasInView ? false : this._isInView(el)

      }
    },
    onEvent() {
      this.rootEl.addEventListener('scroll', this._handleSpy())
    },
    offEvent() {
      this.rootEl.removeEventListener('scroll', this._handleSpy())
    }
  },
  render: (h) => {
    const { tag } = this;
    return h(tag, {

    })
  }
}
</script>
<style>

</style>
