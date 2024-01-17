<script>
export default {

}
</script>


<template>
    <div class="d-flex flex-column justify-content-center align-items-center flex-grow-1 bg-image">
        <div class="content d-flex flex-column align-items-center p-3 rounded">
            <p class="text-white-50">Alla fine è solo una pagina di progetti...</p>

            <div class="d-flex justify-content-center home-btn">
                <router-link :to="{ name: 'projects.index' }">
                    <span class="btn btn-sm main-btn-background text-light">Progetti <font-awesome-icon
                            icon="fa-solid fa-book" /></span>
                </router-link>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.home-btn {
    width: 200px;
    border-right: solid 2px;
    border-left: solid 2px;
}

.bg-image {
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.0)), url('../images/background.png');
    background-repeat: no-repeat;
    background-position: left;
    position: relative;
    background-size: contain;
}

.content {
    background-color: rgba(24, 23, 23, 0.538);
    -webkit-box-shadow: 5px 5px 15px 5px #000000;
    box-shadow: 5px 5px 15px 5px #000000;
}
</style>