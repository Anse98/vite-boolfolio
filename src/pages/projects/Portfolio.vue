<template>
    <div class="container py-5" v-if="projects.length > 0">
        <div class="text-center pb-5">
            <h1 class="color-red ">I nostri Progetti</h1>
        </div>

        <div class="d-flex gap-5 flex-wrap py-4 justify-content-center">
            <ProjectCard v-for="project in projects" :project="project" :key="project.id" />
        </div>
    </div>

    <div class="container spinner-container pt-5" v-else>
        <div class="spinner"></div>
    </div>
</template>
  
<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';

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

.spinner-container {
    display: flex;
    justify-content: center;
}

.spinner {
    border: 4px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    border-top: 4px solid #dedede;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>