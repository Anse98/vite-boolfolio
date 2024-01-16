<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: null,
            base_url: 'http://127.0.0.1:8000/api'
        }
    },

    methods: {
        fetchSinglePost() {
            axios.get(`${this.base_url}/projects/${this.$route.params.slug}`).then(res => {
                this.project = res.data.project
                console.log(this.project)
            })
        },

        formatDate(date) {

            return new Date(date).toLocaleString('it-IT', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            });
            // console.log(date)
        }
    },

    created() {
        this.fetchSinglePost();
        this.formatDate()
    },

    mounted() {

    }
}
</script>


<template>
    <section>
        <div class="container d-flex justify-content-center py-5" v-if="project">
            <div class="card bg-dark-grey border-secondary" style="width: 36rem;">
                <img v-if="project.thumb" :src="'http://127.0.0.1:8000/storage/' + project.thumb" class="card-img-top"
                    alt="...">
                <img v-else src="/src/images/no-image.jpg" alt="">

                <div class="card-body text-center">
                    <h5 class="card-title color-red text-decoration-none">
                        {{ project.title }}
                    </h5>
                    <p class="card-text text-white-50"><i>{{ project.description }}</i></p>
                </div>

                <div class="list-group list-group-flush ">
                    <!-- Tipi di progetto-->
                    <div v-if="project.type" class="list-group-item d-flex justify-content-center bg-dark-grey text-white">
                        <span class="badge border"><b>{{ project.type.name }}</b></span>
                    </div>
                    <div v-else class="list-group-item d-flex justify-content-center bg-dark-grey text-light">
                        <p class="mb-0"><b>Nessun tipo di progetto associato</b></p>
                    </div>

                    <!-- Tecnologie del progetto-->
                    <div v-if="project.technologies.length > 0"
                        class="list-group-item d-flex justify-content-center gap-2 flex-wrap bg-dark-grey text-light">
                        <span v-for="technology in project.technologies" class="badge rounded-pill text-bg-dark"><b>{{
                            technology.name }}</b>
                        </span>
                    </div>
                    <div v-else class="list-group-item d-flex justify-content-center bg-dark-grey text-light">
                        <p class="mb-0"><b>Nessuna tecnologia associata</b></p>
                    </div>
                </div>

                <div class="card-body">
                    <p class="mb-0 text-light text-center"><b>{{ this.formatDate(project.created_at) }}</b>
                    </p>
                </div>
            </div>
        </div>

        <div v-else class="spinner-container pt-5">
            <div class="spinner"></div>
        </div>
    </section>
</template>


<style scoped lang="scss">
.list-group-item {
    border-color: gray;
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