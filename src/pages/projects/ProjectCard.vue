<template>
    <div class="card">
        <div class="card-content">
            <h3 class="title">{{ project.title }}</h3>
            <p class="description">{{ project.description }}</p>
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
}
</style>