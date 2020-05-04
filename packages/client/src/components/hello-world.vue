<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { sayHello } from '@mevn/common';

@Component
export default class Counter extends Vue {
  public message = `From Common: ${sayHello('World')}`;
}
</script>
