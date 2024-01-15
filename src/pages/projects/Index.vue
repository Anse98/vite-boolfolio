<template>
    <div class="container">
        <h1>I Progetti</h1>
    </div>

    <div class="container d-flex">
        <ProjectCard v-for="project in projects" :project="project" :key="project.id" />
    </div>
</template>
  
<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    components: {
        ProjectCard,
    },

    data() {
        return {
            projects: [],
            base_url: 'http://127.0.0.1:8000/api'
        }
    },

    methods: {
        fetchProjects() {
            axios.get(`${this.base_url}/projects`).then((res) => {
                console.log(res.data.projects);
                this.projects = res.data.projects;
            })
        }
    },

    created() {
        this.fetchProjects();
    }

}
</script>
  
<style lang="scss" scoped >
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.d-flex {
    display: flex;
    flex-wrap: wrap;
}
</style>
  