<template>
    <section>
        <div class="container text-light text-center pt-5">
            <img src="../../images/no-projects.png" class="pb-4">
            <div class="content">
                <h3>
                    Non abbiamo trovato nessun progetto col tipo selezionato
                </h3>
                <div class="btn btn-sm main-btn-background mt-3">
                    <router-link class="text-decoration-none text-light" :to="{ name: 'projects.index' }">Torna ai
                        progetti</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
img {
    width: 300px;
}
</style>