<template>
  <div class="app-main">
    main

    <router-link class="note" v-for="item in notes" :key="item.id" :to="'/note/' + item.id">
      {{ item.title }}
    </router-link>
    <button @click="createNote">createNote</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ConfrimModal from 'app/components/modals/ConfirmModal.vue';
import NoteCreateModal from 'app/components/modals/NoteCreateModal.vue';

export default {
  name: 'Main',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['notes']),
  },

  created() {},

  beforeDestroy() {},

  mounted() {
    // this.openConfirm();
  },

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
    openConfirm() {
      this.$modal.show(
        ConfrimModal,
        {
          data: {
            title: 't',
            text: 's',
            btns: {
              confirm: {
                title: 23,
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
.app-main {
}
</style>
