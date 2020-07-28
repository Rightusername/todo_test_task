<template>
  <router-link class="app-note" :to="'/note/' + item.id">
    <div class="remove-note-btn" @click.stop.prevent="removeNote(item)">
      <img src="./../../assets/images/cancel.svg" svg-inline alt="" />
    </div>
    <div class="title">{{ index + 1 }}. {{ item.title }}</div>
    <div class="text" ref="text"></div>
    <div class="todos">
      <div
        v-for="(todo, todoIndex) in item.todos"
        :key="todo.id"
        class="todo"
        :class="{ completed: todo.completed }"
      >
        <div class="todo-title">{{ todoIndex + 1 }}. {{ todo.title }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex';

import Quill from 'src/utils/libs/quill.min.js';

import ConfrimModal from 'app/components/modals/ConfirmModal.vue';

export default {
  name: 'Note',
  components: {},
  props: {
    item: {
      type: Object,
      requred: true,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      quill: null,
    };
  },
  computed: {
    ...mapGetters([]),
  },

  mounted() {
    this.quill = new Quill(this.$refs.text, {
      modules: {
        toolbar: false,
      },
      theme: 'snow',
    });
    this.quill.setContents(this.item.text);
  },
  methods: {
    removeNote(note) {
      this.$modal.show(
        ConfrimModal,
        {
          data: {
            title: 'Remove note',
            text: 'Are you sure you want to remove this note?',
            btns: {
              confirm: {
                title: 'Remove',
                callback: () => {
                  this.$store.dispatch('NOTE_REMOVE', note.id);
                },
              },
            },
          },
        },
        {
          transition: 'fade',
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.app-note {
  width: 100%;
  height: 260px;
  padding: 20px;
  overflow: hidden;
  background: var(--sec-btn-bg);
  border: 1px solid var(--sec-btn-border-color);
  box-sizing: border-box;
  border-radius: 8px;
  position: relative;

  .title {
    font-size: 16px;
  }

  .text {
    margin-top: 10px;
    height: 75px;
    border: none;
    pointer-events: none;

    /deep/ .ql-editor {
      padding: 0;
      overflow: hidden;
    }
  }

  .remove-note-btn {
    position: absolute;
    display: flex;
    top: 7px;
    right: 7px;
    padding: 6px;

    svg {
      width: 12px;
      height: auto;
    }
  }
  .todos {
    margin-left: 10px;
    margin-top: 20px;
    height: 90px;
    overflow: hidden;
    .todo {
      .todo-title {
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &.completed {
        .todo-title {
          color: var(--sec-btn-border-color);
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>
