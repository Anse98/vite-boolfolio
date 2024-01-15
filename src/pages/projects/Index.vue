<template>
    <div class="container">
        <h1>I Progetti</h1>
    </div>

    <div class="container">
        <p v-for="project in projects">{{ project.title }}</p>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    components: {

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
  
<style scoped lang="scss">
.container {
    max-width: 1200px;
    margin: 0 auto;
}
</style>
  