<template>
  <div
    class="app-note-create-modal t-modal"
    data-close="true"
    @mousedown="onClose"
  >
    <div class="modal">
      <header>
        <div class="title">Create Note</div>
        <div class="close-btn" data-close="true" @click="close">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background:new 0 0 512 512;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249
                C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306
                C514.019,27.23,514.019,14.135,505.943,6.058z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636
                c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"
                />
              </g>
            </g>
          </svg>
        </div>
      </header>
      <main>
        <input
          ref="title"
          v-model="note.title"
          type="text"
          class="t-input"
          placeholder="Title"
        />
        <textarea
          v-model="note.text"
          rows="4"
          class="t-input"
          placeholder="Note"
        ></textarea>

        <div class="section-title">
          <span>
            Todo List
          </span>
          <div class="add-btn" @click="addTodo">
            <img src="./../../../assets/images/plus.svg" svg-inline alt="" />
          </div>
        </div>

        <div class="todos">
          <div v-for="todo in note.todos" :key="todo.id" class="todo">
            <input v-model="todo.title" placeholder="Task description" type="text" class="t-input" />
            <div class="remove-todo-btn" @click="removeTodo(todo)">
              <img src="./../../../assets/images/cancel.svg" svg-inline alt="" cla/>
            </div>
          </div>
          <div class="empty-label" v-if="note.todos.length == 0">
            No tasks yet
          </div>
        </div>

        <div class="controls">
          <div class="controls-btn cancel" @click="close">
            Cancel
          </div>
          <div class="controls-btn confirm" @click="confirm">
            Save
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import {} from 'app/'
import { generateID } from '../../../utils/common';
export default {
  name: 'NoteCreateModal',
  components: {},

  data() {
    return {
      note: {
        title: '',
        text: '',
        todos: [],
      },
    };
  },
  computed: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.$refs.title.focus();
    }, 100);
  },
  methods: {
    close() {
      this.$emit('close');
    },
    onClose(e) {
      if (e.target.dataset.close) {
        this.close();
      }
    },

    addTodo() {
      this.note.todos.push({
        title: '',
        completed: false,
        id: generateID(),
      });
    },
    removeTodo(todo) {
      this.note.todos.splice(this.note.todos.findIndex(i => i.id == todo.id), 1);
    },

    confirm() {
      this.$store.dispatch('ADD_NOTE', this.note);

      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/_mixins.scss';

.app-note-create-modal {
  .modal {
    width: 440px;
    height: auto;
  }
  input {
    height: 35px;
  }
  main {
    .t-input {
      margin-bottom: 20px;
    }

    
    textarea {
      @include scrollbar(2px);
    }

    .section-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .add-btn {
        width: 26px;
        height: 26px;
        background: var(--sec-btn-bg);
        border: 1px solid var(--sec-btn-border-color);
        cursor: pointer;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 13px;
          height: auto;
        }
      }
    }

    .todos {
      height: 200px;
      max-height: 200px;
      @include scrollbar(2px);
      overflow: auto;

      .todo {
        position: relative;
  
        input {
          padding-right: 35px;
          margin-bottom: 5px;
        }

        .remove-todo-btn {
          position: absolute;
          top: 0px;
          right: 0px;
          width: 28px;
          height: 35px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            width: 11px;
            height: auto;
          }
        }

        &:last-child{
          input {
            margin-bottom: 0px;
          }
        }
      }

      .empty-label {
        font-size: 13px;
        color: var(--primary-text-color);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

    }


    p {
      color: var(--primary-text-color);
      font-size: 13px;
      line-height: 2.2;
      margin: 0;
      margin-bottom: 10px;
    }

    .preview-wrap {
      .preview-image {
        border-radius: 10px;
      }
    }
  }
}
</style>
