<template>
    <div class="container py-5">
        <div class="text-center">
            <h1 class="color-red ">I Progetti</h1>
        </div>

        <div class="d-flex gap-4 flex-wrap py-4 justify-content-center">
            <ProjectCard v-for="project in projects" :project="project" :key="project.id" />
        </div>
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
.bg-dark-grey {
    background-color: #121212;
}
</style>
  