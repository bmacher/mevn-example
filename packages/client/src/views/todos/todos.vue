<template>
  <v-container class="ma-0 pb-0">
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="px-3 pt-3">
          <v-text-field
            v-model="todo"
            label="Todo"
            outlined
            dense
            hint="Mininmal length 5"
            counter
            :append-icon="todo.length >= 5 ? 'add' : ''"
            @click:append="addTodo(todo)"
            @keyup.enter="addTodo(todo)"
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col v-if="todos.length > 0" cols="12">
        <v-card>
          <v-card-title class="pb-0">Todos</v-card-title>
          <v-list class="pr-1">
            <v-list-item
              v-for="(todo, index) of todos"
              :key="index"
              class="pr-0"
            >
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-list-item-content
                    @click="todo.done = !todo.done"
                    :style="[todo.done ? { 'text-decoration': 'line-through' } : {}]"
                  >
                    {{ todo.task }}
                    <v-fade-transition>
                      <v-overlay
                        v-if="hover"
                        absolute
                        :color="!todo.done ? 'green lighten-2' : 'red lighten-2'"
                        class="ml-2 mr-9"
                      >
                        <v-icon>{{ !todo.done ? 'done' : 'remove' }}</v-icon>
                      </v-overlay>
                    </v-fade-transition>
                  </v-list-item-content>
                </template>
              </v-hover>
              <v-list-item-action class="my-0">
                <v-btn
                  icon
                  @click.prevent="deleteTodo(todo)"
                  color="red lighten-2"
                >
                  <v-icon color="red lighten-2 lighten-1">delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useTodos } from './use-todos';

const TodosView = defineComponent({
  name: 'TodosView',

  setup() {
    return useTodos();
  },
});

export default TodosView;
</script>
