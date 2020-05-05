<template>
  <v-app>
    <!-- HEADER -->
    <v-app-bar
      app
      clipped-left
      dark
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <v-toolbar-title>TodoApp</v-toolbar-title>
      </v-col>
    </v-app-bar>

    <!-- CONTENT -->
    <v-content>
      <v-container class="container-width">
        <!-- INJECTION OF THE VIEW -->
        <todos-view />
      </v-container>
    </v-content>

    <!-- FOOTER -->
    <v-footer
      dark
      app
    >
      <v-col
        class="text-center"
        cols="12"
      >
        &copy; {{ new Date().getFullYear() }} by Benjamin Macher
      </v-col>
  </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { TodosView } from '@/views';

const App = defineComponent({
  name: 'App',

  components: { TodosView },
});

export default App;
</script>

<style lang="scss" scoped>
.container-width {
  width: 500px;
}
</style>
