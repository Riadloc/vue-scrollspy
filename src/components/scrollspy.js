import Vue from "vue"
import { throttle, scrollTop as scrollTo } from '@/assets/utils'
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
    navItem: {
      type: String
    },
    offset: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      targets: [],
      activeItem: '',
      hasBound: false
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
        this.activeItem = this.current
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
    spy() {
      const { targets, items } = this
      let hasInView = false
      let activeItem
      for (let i = 0; i < targets.length; i++) {
        const el = targets[i]
        let isInView = hasInView ? false : this.isInView(el)
        if (isInView) {
          activeItem = items[i]
          hasInView = true
        }
      }
      this.activeItem = activeItem
      
      let current = activeItem
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
      const rootElRect = this.getRootRect()
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
    getRootRect() {
      let rootElRect
      if (this.el) {
        rootElRect = document.querySelector(this.el).getBoundingClientRect()
      } else {
        rootElRect = {
          top: 0,
          height: window.innerHeight
        }
      }
      return rootElRect
    },
    scrollFn(el) {
      console.log(33)
      const target = document.querySelector(el)
      const elRect = target.getBoundingClientRect()
      const rootElRect = this.getRootRect()
      const { scrollTop } = this.getScrollDimensions()
      const elTop = scrollTop + elRect.top - rootElRect.top
      scrollTo(this.rootEl, scrollTop, elTop)
    },
    processClassName(classStr = '', item) {
      const clsList = classStr.split(' ')
      let curIndex = clsList.indexOf(this.activeClass)
      if (this.activeItem === item) {
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
    console.log(children)
    const processedChildren = children.map((vnode, index) => {
      let { staticClass = '', attrs = {}, on = {} } = vnode.data || {}
      const to = attrs['data-to']
      if (to) {
        const callback = on.click || function () {}
        const self = this
        const fn = function(evt) {
          self.scrollFn(to)
          callback(evt)
        }
        on.click = fn
        staticClass = this.processClassName(staticClass, to)
      }
      return {
        ...vnode,
        data: {
          ...vnode.data,
          on,
          staticClass
        }
      }
    })
    return h(tag, processedChildren)
  }
}

export default Vue.extend(scrollSpy)