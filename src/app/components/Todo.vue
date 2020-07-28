<template>
  <div class="app-todo">
    <div class="title-wrap" @click="edit(todo)" v-down-outside="noedit">
      <p class="title" v-if="!editable">{{todo.title}}</p>
      <textarea @input="onTextChange" rows="3" ref="titleInput" v-if="editable" v-model="todo.title" placeholder="Task description" type="text" class="title" ></textarea>
    </div>
    <div class="controls">
      <div class="remove-btn" @click="remove">
        <img src="./../../assets/images/cancel.svg" svg-inline alt=""/>
      </div>
      <Checkbox @input="onCheckboxChange" v-model="todo.completed" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { downOutside } from 'src/utils/directives/down-outside';

import Checkbox from 'app/components/ui/Checkbox.vue';

export default {
  name: 'Todo',
  components: {
    Checkbox,
  },
  directives: {
    downOutside,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
    lastCreatedTask: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      editable: false,
    };
  },
  computed: {
    ...mapGetters([]),
  },

  mounted() {
    if (this.lastCreatedTask && this.lastCreatedTask.id == this.todo.id) {
      this.edit();
    }
  },

  methods: {
    onSetEditable(id) {
      if (this.todo.id == id) {
        this.edit();
      }
    },
    onTextChange() {
      this.$emit('change');
    },
    onCheckboxChange() {
      this.$emit('change');
    },
    remove() {
      this.$emit('remove', this.todo);
    },
    noedit() {
      this.editable = false;
    },
    edit() {
      this.editable = true;
      setTimeout(() => {
        this.$refs.titleInput.focus();
      }, 50);
    },
    save() {
      this.editable = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/_mixins.scss';

.app-todo {
  display: flex;
  align-items: flex-start;
  width: 100%;

  .title-wrap {
    flex-grow: 1;

    .title {
      width: 100%;
      font-size: 13px;
      box-sizing: border-box;
    }

    p.title {
      margin: 0;
      margin-left: 3px;
      margin-top: 3px;
      min-height: 25px;
    }

    textarea.title {
      background: var(--sec-btn-bg);
      margin-right: 3px;
      border: 1px solid var(--sec-btn-border-color);
      resize: none;
      outline: none;
      @include scrollbar(2px);
    }
  
  }


  .controls {
    width: 100px;
    display: flex;
    align-items: center;
    flex-shrink: 0;

    .remove-btn {
      width: 18px;
      height: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      margin-left: 20px;

      svg {
        width: 70%;
        height: auto;
      }
    }
  }
}
</style>
