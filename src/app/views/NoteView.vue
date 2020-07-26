<template>
  <div v-if="note" class="app-note-view">
    <router-link to="/" class="back-btn">
      <img src="./../../assets/images/triangle.svg" svg-inline alt="" />
    </router-link>

    <div class="main-section">
      <header>
        <h1>
          {{ note.title }}
        </h1>
        <div class="save-btn primary-btn" @click="saveNote">Save</div>
      </header>
      <div class="note-wrap">
        <NoteEditor v-model="note.text" />
        <div class="todo-list">
          <h2>
            <span>
              Todo List
            </span>
            <div class="add-todo-btn secondary-btn" @click="addTodo">New Task</div>
          </h2>
          <div class="t-todos">
            <div v-for="(todo, index) in note.todos" :key="todo.id" class="todo">
              <div class="counter">{{ index + 1 }}.</div>
              <Todo :todo="todo" @remove="onTodoRemove(todo)" />
            </div>
            <div v-if="note.todos.length == 0" class="empty-label">
              No tasks yet
            </div>
          </div>
        </div>
      </div>
    </div>
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
    this.note = clonedeep(
      this.notes.find(i => i.id == this.$route.params.id),
      true
    );
    if (!this.note) {
      this.$router.push('/');
    }
  },

  beforeDestroy() {},

  mounted() {},

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
  display: flex;
  min-height: 100%;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
  background: var(--background-darkest-color);

  .back-btn {
    width: 50px;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    background: var(--input-bg);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 17px;
      height: auto;
      transform: rotate(180deg);
      transition: all 0.1s ease;
      path {
        fill: var(--input-color);
      }
    }

    &::after {
      content: '';
      position: absolute;
      left: 0px;
      top: 0px;
      height: 100%;
      width: 100%;
      transition: all 0.1s ease;
      transform: translateX(-100%);
      background: linear-gradient(90deg, var(--input-border-color) 0%, transparent 30%);
    }

    &:hover {
      &::after{
        transform: translateX(0%);
      }

      svg {
        transform: rotate(180deg) translateX(3px);
      }
    }
  }

  header {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      margin: 0;
    }
  }

  .main-section {
    flex-grow: 1;
    padding: 0 20px;
    padding-bottom: 20px;
    max-width: 1200px;
    margin: 0 auto;
    h1 {
      font-size: 28px;
    }

    .note-wrap {
      display: flex;
      // height: 100%;;
      height: calc(100% - 100px);

      .app-note-editor {
        width: 60%;
        flex-shrink: 0;
      }

      .todo-list {
        flex-grow: 1;
        padding-left: 20px;
        h2 {
          font-size: 20px;
          margin: 0;
          height: 41px;
          margin-left: 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .t-todos {
          height: calc(100% - 61px);
          margin-top: 20px;
          .todo {
            margin-bottom: 5px;
            .counter {
              margin-top: 4px;
              margin-left: -10px;
            }
          }
        }
      }
    }
  }
}
</style>
