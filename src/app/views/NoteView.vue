<template>
  <div class="app-note-view">
    {{note.title}}
    <router-link to="/">back</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NoteView',
  components: {},
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(['notes']),
    note() {
      return this.notes.find(i => i.id == this.$route.params.id);
    },
  },


  created() {},

  beforeDestroy() {},

  mounted() {
    console.log(this.note);
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
.app-note-view {

}
</style>
