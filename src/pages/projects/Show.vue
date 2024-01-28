<script>
import axios from 'axios';
import { store } from '../../store.js';

export default {
    data() {
        return {
            project: null,
            store: store
        }
    },

    watch: {
        '$route.params.slug': 'fetchSinglePost'
    },

    methods: {
        fetchSinglePost() {
            axios.get(`${store.base_url}/projects/${this.$route.params.slug}`).then(res => {
                this.project = res.data.project
            }).catch(error => {
                if (error.response.status === 404) {
                    this.$router.push({ name: 'not-found' })
                }
            })
        },

        formatDate(date) {

            return new Date(date).toLocaleString('it-IT', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            });
        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
            });
        },
    },

    created() {
        this.fetchSinglePost();
        this.formatDate()
    },
}
</script>


<template>
    <section>
        <!-- SINGOLO PROGETTO -->
        <div class="container d-flex justify-content-center py-5" v-if="project">

            <!-- Card -->
            <div class="card bg-dark-grey border-secondary" style="width: 36rem;">
                <div class="d-flex justify-content-center">
                    <img v-if="project.thumb" :src="'http://127.0.0.1:8000/storage/' + project.thumb"
                        class="card-img-top card-image" alt="...">
                    <img v-else src="/src/images/no-image.jpg" alt="" class="card-img-top">
                </div>

                <div class="card-body text-center">
                    <h5 class="card-title color-red text-decoration-none">
                        {{ project.title }}
                    </h5>
                    <p class="card-text text-white-50"><i>{{ project.description }}</i></p>
                </div>

                <div class="list-group list-group-flush ">
                    <!-- Tipi di progetto-->
                    <div v-if="project.type" class="list-group-item d-flex justify-content-center bg-dark-grey text-white">
                        <router-link :to="{ name: 'types.index' }">
                            <span class="badge border"><b>{{ project.type.name }}</b></span>
                        </router-link>
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

        <!-- PROGETTI CON LO STESSO TIPO -->

        <div v-if="project?.type && project.type.projects.length > 1" class="container py-5">

            <div class="d-flex justify-content-center">
                <div class="d-flex gap-2 justify-content-center title w-50 mb-5">
                    <h2 class="color-red ">Altri progetti di tipo </h2>
                    <h4><span class="badge text-light main-btn-background shadow-btn">
                            {{ project.type.name }}
                        </span>
                    </h4>
                </div>
            </div>


            <div class="container d-flex flex-wrap justify-content-center gap-5 py-5">

                <!-- Card -->
                <div v-for="project in project.type.projects" :key="project.id" class="card bg-dark-grey border-secondary"
                    style="width: 20rem;">

                    <div class="d-flex justify-content-center">
                        <img v-if="project.thumb" :src="'http://127.0.0.1:8000/storage/' + project.thumb"
                            class="card-img-top" alt="...">
                        <img v-else src="/src/images/no-image.jpg" alt="" class="card-img-top">
                    </div>

                    <div class="card-body text-center">
                        <h5 class="card-title color-red text-decoration-none">
                            {{ project.title }}
                        </h5>
                        <p class="card-text text-white-50"><i>{{ project.description }}</i></p>
                    </div>

                    <div class="list-group list-group-flush ">
                        <!-- Tipi di progetto-->
                        <div v-if="project.type" class="list-group-item d-flex justify-content-center bg-dark-grey">
                            <span class="badge border"><b>{{ project.type.name }}</b></span>
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

                    <div class="py-2">
                        <p class="mb-0 text-light text-center"><b>{{ this.formatDate(project.created_at) }}</b>
                        </p>
                    </div>

                    <div class="py-2 border-top border-secondary d-flex justify-content-center ">
                        <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }"
                            class="text-decoration-none btn btn-sm text-light main-btn-background"
                            @click="scrollToTop()"><font-awesome-icon icon="fa-solid fa-eye" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
.list-group-item {
    border-color: gray;
}

.card-image {
    width: 50%;
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