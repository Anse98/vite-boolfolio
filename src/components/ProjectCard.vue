<template>
    <router-link class="text-decoration-none d-flex" :to="{ name: 'projects.show', params: { slug: project.slug } }">
        <div class="card bg-dark-grey border-secondary" style="width: 18rem;">
            <img v-if="project.thumb" :src="store.start_url_image + project.thumb" class="card-img-top" alt="...">
            <img v-else src="/src/images/no-image.jpg" alt="" class="card-img-top">

            <div class="card-body text-center">
                <h5 class="card-title color-red">{{ project.title }}</h5>
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
        </div>
    </router-link>
</template>

<script>
import { store } from '../store';

export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            store: store
        }
    }
}
</script>

<style lang="scss" scoped>
.list-group-item {
    border-color: gray;
}

.card {
    -webkit-box-shadow: 5px 1px 5px 5px #000000;
    box-shadow: 5px 1px 5px 5px #000000;
}
</style>