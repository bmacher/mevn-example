<template>
  <div id="app">
    <hello-world />
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { HelloWorld } from '@/components';

@Component({ components: { HelloWorld } })
export default class Counter extends Vue {
  public message = 'From Backend: Loading...';

  private created(): void {
    fetch('http://localhost:3000')
      .then((data) => data.text())
      .then((data) => { this.message = `From Backend: ${data}`; })
      .catch(() => { this.message = 'From Backend: Could not load data.'; });
  }
}
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
