<template>
  <div class="app-main">
    <header>
      <h1>
        Notes
      </h1>
      <div class="primary-btn" @click="createNote">Create Note</div>
    </header>

    <div class="no-notes" v-if="!notes || notes.length == 0">No notes</div>
    <div class="notes-list">
      <Note v-for="(note, index) in notes" :item="note" :index="index" :key="note.id" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import NoteCreateModal from 'app/components/modals/NoteCreateModal.vue';
import Note from 'app/components/Note.vue';

export default {
  name: 'Main',
  components: {
    Note,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['notes']),
  },

  created() {},

  beforeDestroy() {},

  mounted() {},

  methods: {
    createNote() {
      this.$modal.show(
        NoteCreateModal,
        {},
        {
          transition: 'fade',
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/_mixins.scss';

.app-main {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  transition: none;
  height: 100%;
  padding-bottom: 20px;
  box-sizing: border-box;

  header {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .no-notes {
    text-align: center;
    margin-top: 40px;
    color: var(--input-border-color);
    font-size: 14px;
  }

  .notes-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: max-content;
    gap: 20px;
    // display: flex;
    // flex-wrap: wrap;
    overflow: auto;
    height: calc(100% - 100px);
    @include scrollbar(2px);


  }
}
</style>
