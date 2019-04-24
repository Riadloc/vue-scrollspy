import Vue from "vue"
import { throttle } from '@/assets/utils'
const scrollSpy = {
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
    activeClass: {
      type: String
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      targets: [],
      activeIndex: -1
    }
  },
  computed: {
    rootEl() {
      return this.el ? document.querySelector(this.el) : window
    }
  },
  mounted() {
    this.init()
    this.onEvent()
  },
  beforeDestroy() {
    this.offEvent()
  },
  methods: {
    init() {
      if (this.current) {
        this.activeIndex = this.items.indexOf(this.current)
      }
      this.targets = this.items.map(node => document.querySelector(node))
      this.spy()
    },
    onEvent() {
      this.fn = throttle(this.spy, 100)
      this.rootEl.addEventListener('scroll', this.fn)
    },
    offEvent() {
      this.rootEl.removeEventListener('scroll', this.fn)
    },
    handleSpy() {
      throttle(this.spy, 1000)
    },
    spy() {
      const { targets, items } = this
      let hasInView = false
      let activeIndex
      for (let i = 0; i < targets.length; i++) {
        const el = targets[i]
        let isInView = hasInView ? false : this.isInView(el)
        if (isInView) {
          activeIndex = i
          hasInView = true
        }
      }
      this.activeIndex = activeIndex
      
      let current = activeIndex && items[activeIndex]
      if (this.current !== current) {
        this.$emit('update:current', current)
        this.$emit('on-update', current)
      }
    },
    isInView(el) {
      if (!el) {
        return false
      }
      const elRect = el.getBoundingClientRect()
      let rootElRect
      if (this.el) {
        rootElRect = document.querySelector(this.el).getBoundingClientRect()
      } else {
        rootElRect = {
          top: 0,
          height: window.innerHeight
        }
      }
      const { scrollTop } = this.getScrollDimensions()
      const vHeight = rootElRect.height
      const elTop = scrollTop + elRect.top - rootElRect.top + this.offset
      const scrollBottom = scrollTop + vHeight
      const elBottom = elTop + elRect.height
      return (elBottom > scrollTop) && (elTop < scrollBottom)
    },
    getScrollDimensions() {
      let scrollTop
      if(this.el) {
        const element = document.querySelector(this.el)
        scrollTop = element.scrollTop
      } else {
        scrollTop = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
      }
      return {
        scrollTop
      }
    },
    processClassName(classStr, index) {
      const clsList = classStr.split(' ')
      let curIndex = clsList.indexOf(this.activeClass)
      if (this.activeIndex === index) {
        if (!~curIndex) {
          clsList.push(this.activeClass)
        }
      } else {
        if (~curIndex) {
          clsList.splice(curIndex, 1)
        }
      }
      return clsList.join(' ').trim()
    }
  },
  render: function (h) {
    const { tag, $slots } = this
    let children = $slots.default
    children = children.filter(vnode => vnode.tag)
    const processedChildren = children.map((vnode, index) => {
      let { staticClass = '' } = vnode.data || {}
      staticClass = this.processClassName(staticClass, index)
      return {
        ...vnode,
        data: {
          ...vnode.data,
          staticClass
        }
      }
    })
    return h(tag, processedChildren)
  }
}

export default Vue.extend(scrollSpy)