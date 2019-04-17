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
    }
  },
  data() {
    return {
      targets: []
    }
  },
  computed: {
    rootEl() {
      return this.el ? document.querySelector(this.el) : window;
    }
  },
  mounted() {
    this._init();
    this.onEvent();
  },
  beforeDestroy() {
    this.offEvent();
  },
  methods: {
    _init() {
      this.targets = this.items.map(node => {
        document.querySelector(node)
      })
      this._spy();
    },
    _handleSpy() {
      throttle(this._spy, 200);
    },
    _spy() {
      const { targets } = this;

      let hasInView = false;
      for (let i = 0; i < targets; i++) {
        
      }
    },
    onEvent() {
      this.rootEl.addEventListener('scroll', this._handleSpy());
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
