<template>
  <div id="app">
    <!-- <router-view/> -->
    <Test />
  </div>
</template>

<script>
import Test from './components/Test'
export default {
  data () {
    return {}
  },
  components: {
    Test
  },
  methods: {
    start () {
      var NS = function (selector, context) {
        return new NS.fn.Init(selector, context)
      }

      NS.fn = NS.prototype = {
        constructor: NS,

        length: 0,
        size: function () {
          return this.length
        },

        Init: function (selector, context) {
          this.length = 0
          context = context || document
          if (~selector.indexOf('#')) {
            this[0] = document.getElementById(selector.slice(1))
            this.length = 1
          } else {
            var doms = context.getElementsByTagName(selector),
              i = 0
            while (i < doms.length) {
              this[i] = doms[i]
              i++
            }
            this.length = doms.length
          }
          this.selector = selector
          this.context = context
          return this
        },

        push: [].push,
        splice: [].splice,
        sort: [].sort
      }

      NS.extends = NS.fn.extends = function () {
        var len = arguments.length,
          target = arguments[0],
          i = 1,
          key
        if (i === len) {
          target = this
          i--
        }
        while (i < len) {
          for (key in arguments[i]) {
            target[key] = arguments[i][key]
          }
          i++
        }
        return target
      }

      NS.fn.Init.prototype = NS.fn

      NS('#app')[0].style.color = 'green'

      console.log(NS('#app'), NS('#app').style, NS('div', NS('div')[0]))
    }
  },
  mounted () {
    this.start()
  }
}
</script>

<style lang="less">
html, body{
  height: 100%;
}
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  height: 100%;
}
</style>
