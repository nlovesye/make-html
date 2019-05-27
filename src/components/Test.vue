<template>
  <div class="test">
    <div class="bg1">
      <div class="face1"></div>
      <div class="face2"></div>
      <div class="face3"></div>
      <div class="face4"></div>
      <div class="face5"></div>
      <div class="face6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.test{
  position: relative;
  height: 100%;
  
  .bg1{
    // perspective: 1800px;
    transform-style: preserve-3d;
    position: absolute;
    width: 200px;
    height: 200px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    // transition: all 4s;
    // transform: rotateX(-45deg) rotateY(45deg);
    // transform-origin: 0 0;
    // backface-visibility: visible;
    animation: ani 2s ease-in-out 100ms infinite normal;

    // &:hover{
    //   transform: rotateY(360deg);
    //   transform-origin: 100% 0;
    // }
    @keyframes ani {
      0% {
        transform: rotateY(0deg);
      }
      50% {
        transform: rotateX(360deg) rotateY(360deg);
      }
      100% {
        transform: rotateY(0deg);
      }
    }

    div{
      width: 200px;
      height: 200px;
      position: absolute;
      // backface-visibility: visible;
    }
    .face1{
      background-color: red;
    }
    .face2{
      background-color: green;
      transform: rotateY(-90deg);
      transform-origin: 0 100%;
    }
    .face3{
      background-color: blue;
      transform: rotateX(90deg);
      transform-origin: 100% 0;
    }
    .face4{
      background-color: yellow;
      transform: rotateY(90deg);
      transform-origin: 100% 0;
    }
    .face5{
      background-color: gray;
      transform: rotateX(-90deg);
      transform-origin: 0 100%;
    }
    .face6{
      background-color: purple;
      transform: translateZ(200px);
    }
  }
}
</style>
