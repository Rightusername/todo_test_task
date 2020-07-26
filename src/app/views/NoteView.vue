<template>
  <div v-if="note" class="app-note-view">
    {{ note.title }}
    <NoteEditor v-model="note.text" />
    <h2>
      <span>
        Todo List
      </span>
      <div class="add-todo-btn" @click="addTodo">New Task</div>
    </h2>
    <div class="t-todos">
      <div v-for="(todo, index) in note.todos" :key="todo.id" class="todo">
        <div class="counter">{{ index + 1 }}.</div>
        <Todo :todo="todo" @remove="onTodoRemove(todo)" />
      </div>
      <div class="empty-label" v-if="note.todos.length == 0">
        No tasks yet
      </div>
    </div>
    <router-link to="/">back</router-link>
    <div class="save-btn" @click="saveNote">save</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import clonedeep from 'lodash-es/cloneDeep';
import { generateID } from '../../utils/common';
import { events } from '../../utils/events';

import NoteEditor from 'app/components/NoteEditor.vue';
import Todo from 'app/components/Todo.vue';

export default {
  name: 'NoteView',
  components: {
    NoteEditor,
    Todo,
  },
  data() {
    return {
      note: null,
    };
  },
  computed: {
    ...mapGetters(['notes']),
  },


  created() {
    this.note = clonedeep(this.notes.find(i => i.id == this.$route.params.id), true);
    if (!this.note) {
      this.$router.push('/');
    }
  },

  beforeDestroy() {},

  mounted() {
  },

  methods: {
    saveNote() {
      this.$store.dispatch('NOTE_EDIT', this.note);
    },

    addTodo() {
      let todo = {
        title: '',
        completed: false,
        id: generateID(),
      };
      this.note.todos.push(todo);
      setTimeout(() => {
        events.emit('TODO_SET_EDITABLE', todo.id);
      }, 50);
    },

    onTodoRemove(todo) {
      this.note.todos.find((item, index) => {
        if (item && item.id == todo.id) {
          this.note.todos.splice(index, 1);
          return;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/_mixins.scss';

.app-note-view {
  h2 {
    font-size: 16px;
  }

  .t-todos {
    .todo {
      .counter {
        margin-top: 4px;
      }
    }
  }

}
</style>
