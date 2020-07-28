<template>
  <div class="app-note-editor">
    <div ref="editor"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Quill from 'src/utils/libs/quill.min.js';
import throttle from 'lodash-es/throttle';


export default {
  name: 'NoteEditor',
  components: {},
  props: ['value'],
  data() {
    return {
      quill: null,
      emitInput: null,
    };
  },
  computed: {
    ...mapGetters([]),
  },
  created() {
    this.emitInput = throttle(this._emitInput, 100);
  },

  mounted() {
    this.quill = new Quill(this.$refs.editor, {
      modules: {
        history: {
          userOnly: true,
        },
      },
      theme: 'snow',
    });
    this.quill.on('text-change', (delta, oldDelta, source) => {
      this.emitInput();
      if (source == 'user') {
        this.$emit('change');
      }
    });
    if (this.value.ops) {
      this.quill.setContents(this.value.ops);
    }
  },
  methods: {
    _emitInput() {
      this.$emit('input', this.quill.getContents());
    },

    undo() {
      if (this.quill.history.stack.undo.length != 0) {
        this.quill.history.undo();
      }
    },
    redo() {
      if (this.quill.history.stack.redo.length != 0) {
        this.quill.history.redo();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/libs/quill.snow.css';
@import '~styles/_mixins.scss';

.app-note-editor {
  /deep/ {
    .ql-toolbar {
      background: var(--input-bg);
      border: 1px solid var(--input-border-color);
      border-bottom: 0px;

    }
    .ql-container {
      border: none;
      height: calc(100% - 41px);

      .ql-editor {
        // height: 100px;
        @include scrollbar(2px);

        background: var(--input-bg);
        border: 1px solid var(--input-border-color);
        color: var(--primary-text-color);
      }
    }
  }
}
</style>
