<template>
  <div class="app-main">
    main
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ConfrimModal from 'app/components/modals/ConfirmModal.vue';

export default {
  name: 'Main',
  components: {},
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(['storage']),
  },

  created() {},

  beforeDestroy() {},

  mounted() {
    this.openConfirm();
  },

  methods: {
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
