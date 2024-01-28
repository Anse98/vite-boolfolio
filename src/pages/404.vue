<script>
export default {

}
</script>


<template>
    <section>
        <div class="container py-5 text-center text-white-50 ">
            <div>
                <img src="/src/images/404.png" alt="" class="w-25 ">
            </div>
        </div>
        <div class="container text-center text-white-50 ">
            <p>Sembra che la pagina che stai cercando non esista più <font-awesome-icon icon="fa-solid fa-face-sad-tear" />
            </p>
            <router-link class="btn btn-sm main-btn-background text-light" :to="{ name: 'home' }"><font-awesome-icon
                    icon="fa-solid fa-house" /></router-link>
        </div>
    </section>
</template>


<style scoped lang="scss"></style>