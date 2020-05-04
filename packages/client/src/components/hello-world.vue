<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
import { sayHello } from '@mevn/common';

export default defineComponent({
  setup() {
    const state = reactive({
      message: `From Common: ${sayHello('World')}`,
    });

    return toRefs(state);
  },

});
</script>
