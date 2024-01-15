<template>
    <div class="card">
        <div class="card-content">
            <h3 class="title">{{ project.title }}</h3>
            <figure>
                <img :src="'http://127.0.0.1:8000/storage/' + project.thumb" alt="" class="img">
            </figure>
            <p class="description">{{ project.description }}</p>
            <p class="types" v-if="project.type"> {{ project.type.name }}</p>
            <p v-if="project.technologies.length > 0" class="technologies">
                <span v-for="technology in project.technologies">{{ technology.name }}
                </span>
            </p>
            <p v-else>
                Nessuna tecnologia associata
            </p>
        </div>
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
.card {
    padding: 12px;
    max-width: 300px;
}

.card-content {
    padding: 12px;
    border: solid 1px lightgray;

    .title {
        margin-bottom: 12px;
    }

    .description {
        margin-bottom: 16px;
    }

    .types {
        margin-bottom: 12px;
    }

    .technologies {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    figure {
        display: flex;
        justify-content: center;
    }

    .img {
        max-width: 200px;
    }
}
</style>