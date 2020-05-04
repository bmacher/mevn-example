<template>
  <div id="app">
    <hello-world />
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs, onMounted,
} from '@vue/composition-api';
import { HelloWorld } from '@/components';

export default defineComponent({
  components: { HelloWorld },

  setup() {
    const state = reactive({
      message: 'From Backend: Loading...',
    });

    onMounted(() => {
      fetch('http://localhost:3000')
        .then((data) => data.text())
        .then((data) => { state.message = `From Backend: ${data}`; })
        .catch(() => { state.message = 'From Backend: Could not load data.'; });
    });

    return {
      ...toRefs(state),
      HelloWorld,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
