<template>
  <div class="app-note-view">
    {{ note.title }}
    <NoteEditor v-model="note.text" />
    <router-link to="/">back</router-link>
    <div class="save-btn" @click="saveNote">save</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import clonedeep from 'lodash-es/cloneDeep';

import NoteEditor from 'app/components/NoteEditor.vue';

export default {
  name: 'NoteView',
  components: {
    NoteEditor,
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
    this.note =  clonedeep(this.notes.find(i => i.id == this.$route.params.id), true);
  },

  beforeDestroy() {},

  mounted() {
    console.log(this.note);
  },

  methods: {
    saveNote() {
      this.$store.dispatch('NOTE_EDIT', this.note);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-note-view {

}
</style>
