<script>
import PageHeader from './components/PageHeader.vue';

export default {
  components: {
    PageHeader
  }
}
</script>

<template>
  <!-- Header -->
  <PageHeader />
  <router-view></router-view>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
