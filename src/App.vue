<script>
import ProjectIndex from './pages/projects/Index.vue';
import PageHeader from './components/PageHeader.vue';

export default {
  components: {
    ProjectIndex,
    PageHeader
  }
}
</script>

<template>
  <!-- Header -->
  <PageHeader />
  <!-- Pagina progetti -->
  <ProjectIndex />
</template>

<style lang="scss">
@use './style/general.scss';
</style>
