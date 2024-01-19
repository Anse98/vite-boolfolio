<template>
    <section>
        <div class="container text-center py-5 w-50 " v-if="types.length > 0">
            <div class="">
                <h1 class="color-red title">Tipi di progetto <font-awesome-icon icon="fa-solid fa-paperclip" /></h1>
            </div>

            <div class="container">
                <div v-for="type in types" :key="type.id" class="p-3 d-flex flex-column align-items-center">

                    <div class="type d-flex gap-4 align-items-center justify-content-center">
                        <h4 class="py-4"><span class="badge border">{{ type.name }}</span></h4>
                        <span class="text-decoration-none btn btn-sm text-light main-btn-background border mb-1"
                            @click="hideShowProjects(type.id)">
                            <font-awesome-icon icon="fa-solid fa-eye" />
                        </span>
                    </div>

                    <div class="d-flex flex-wrap gap-5 justify-content-center d-none" :id="'type-' + type.id">

                        <!-- CARD -->

                        <div class="card bg-dark-grey border-secondary" style="width: 18rem;"
                            v-for="project in type.projects" :key="project.id">
                            <img v-if="project.thumb" :src="'http://127.0.0.1:8000/storage/' + project.thumb"
                                class="card-img-top" alt="...">
                            <img v-else src="/src/images/no-image.jpg" alt="">

                            <div class="card-body text-center">
                                <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }"
                                    class="text-decoration-none">
                                    <h5 class="card-title color-red ">
                                        {{ project.title }}
                                    </h5>
                                </router-link>
                                <p class="card-text text-white-50"><i>{{ project.description }}</i></p>
                            </div>

                            <div class="list-group list-group-flush ">
                                <!-- Tipi di progetto-->
                                <div v-if="project.type"
                                    class="list-group-item d-flex justify-content-center bg-dark-grey text-white">
                                    <span class="badge border"><b>{{ project.type.name }}</b></span>
                                </div>

                                <!-- Tecnologie del progetto-->
                                <div v-if="project.technologies.length > 0"
                                    class="list-group-item d-flex justify-content-center gap-2 flex-wrap bg-dark-grey text-light">
                                    <span v-for="technology in project.technologies"
                                        class="badge rounded-pill text-bg-dark"><b>{{
                                            technology.name }}</b>
                                    </span>
                                </div>
                                <div v-else class="list-group-item d-flex justify-content-center bg-dark-grey text-light">
                                    <p class="mb-0"><b>Nessuna tecnologia associata</b></p>
                                </div>
                            </div>

                            <div class="py-1">
                                <p class="mb-0 text-light text-center"><b>{{ this.formatDate(project.created_at) }}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container spinner-container pt-5" v-else>
            <div class="spinner"></div>
        </div>

    </section>
</template>


<script>
import axios from 'axios';
import { store } from '../../store';

export default {

    data() {
        return {
            store: store,
            types: [],
        }
    },

    methods: {
        fetchTypes() {
            axios.get(`${store.base_url}/types`).then((res) => {
                this.types = res.data.types
                // console.log(res.data)
            })
        },

        formatDate(date) {

            return new Date(date).toLocaleString('it-IT', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            });
        },

        hideShowProjects(projectsId) {

            const projectContainer = document.getElementById('type-' + projectsId)

            if (projectContainer.classList.contains('d-none')) {
                projectContainer.classList.remove('d-none')
            } else {
                projectContainer.classList.add('d-none');
            }
        }
    },

    created() {
        this.fetchTypes();
    }
}
</script>

<style scope lang="scss">
.list-group-item {
    border-color: gray;
}
</style>