<template>
  <div class="app-todo-view">
    todo
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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

  mounted() {},

  methods: {

  },
};
</script>

<style lang="scss" scoped>
.app-todo-view {

}
</style>
