<script>
export default {

}
</script>


<template>
    <section>

        <div class="container pb-5">

            <div class="d-flex justify-content-center align-items-center gap-3">
                <h1 class="py-5 text-center color-red">Contattaci</h1>
                <img src="../images/contact-us.png" alt="">
            </div>

            <form method="POST" action="">
                <div class="form-group mb-5">
                    <label for="name" class="form-label color-grey">Nome</label>
                    <input type="text" class="form-control" id="name" placeholder="ES: Paolo Rossi" required>
                </div>
                <div class="form-group mb-5">
                    <label for="email" class="form-label color-grey">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="ES: PaoloRossi@gmail.com" required>
                </div>
                <div class="form-group mb-5">
                    <label for="message" class="form-label color-grey">Messaggio</label>
                    <textarea class="form-control" id="message" rows="4" placeholder="Testo del messaggio"
                        required></textarea>
                </div>
                <button type="submit" class="btn main-btn-background btn-sm text-light">Invia</button>
            </form>
        </div>

    </section>
</template>


<style scoped lang="scss">
img {
    width: 100px;
}
</style>