<template>
  <div id="app">
    <Inicio />
  </div>
</template>

<script>
import Inicio from './components/inicio/Inicio.vue';

export default {
  name: 'App',

  components: {
    Inicio
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
*{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
</style>