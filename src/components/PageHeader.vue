<template>
    <header class="border-bottom border-secondary position-sticky start-0 end-0 top-0 z-3 bg-dark-grey">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <div class="header-image">
                    <router-link :to="{ name: 'home' }" class="text-decoration-none color-light-grey">
                        <img class="header-logo" src="/src/images/logo-projects.png" alt="">
                    </router-link>
                </div>
                <nav>
                    <ul class="d-flex gap-3">

                        <li>
                            <router-link :to="{ name: 'projects.index' }"
                                class="text-decoration-none color-light-grey"><b>Portfolio
                                    <font-awesome-icon icon="fa-solid fa-sheet-plastic" /></b>
                            </router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'types.index' }" class="text-decoration-none color-light-grey"><b>Tipi
                                    di Progetto
                                    <font-awesome-icon icon="fa-solid fa-paperclip" /></b>
                            </router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'contact' }"
                                class="text-decoration-none color-light-grey"><b>Contattaci
                                    <font-awesome-icon icon="fa-solid fa-phone-volume" /></b>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
  
<script>

export default {
    data() {
        return {

        }
    },

    methods: {

    },
}
</script>
  
<style scoped lang="scss">
header {
    .bg-dark-grey {
        background-color: #121212;
    }
}

.header-logo {
    width: 200px;
}
</style>
  