<template>
    <div class="card bg-dark-grey border-secondary" style="width: 18rem;">
        <img v-if="project.thumb" :src="'http://127.0.0.1:8000/storage/' + project.thumb" class="card-img-top" alt="...">
        <img v-else src="/src/images/no-image.jpg" alt="">

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

        <!-- <div class="card-body">
            <a href="#" class="card-link"></a>
            <a href="#" class="card-link"></a>
        </div> -->
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.color-red {
    color: #DF6247;
}

.bg-dark-grey {
    background-color: #121212;
}

.list-group-item {
    border-color: gray;
}
</style>