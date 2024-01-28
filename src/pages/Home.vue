<script>

import { gsap } from "gsap";

export default {

    data() {
        return {
            startingClass: 'd-none'
        }
    },

    mounted() {
        const tl = gsap.timeline()

        gsap.to('.hand-phone', {
            x: 10, // Muovi l'elemento di 10 pixel a destra
            duration: 0.1, // Durata breve per creare un effetto veloce
            repeat: 10, // Numero di ripetizioni (puoi regolare questo valore)
            yoyo: true, // Ripeti l'animazione in senso inverso per creare l'effetto di shake
            ease: 'power1.inOut',
        });

        this.addClassContent();
    },

    methods: {
        addClassContent() {
            setTimeout(() => {
                this.startingClass = 'd-block'
            }, 1500);
        }
    }
}


</script>


<template>
    <div class="d-flex flex-column justify-content-center align-items-center flex-grow-1 bg-image">
        <div class="content d-flex flex-column align-items-center p-3 rounded">

            <div class="text-light">
                <h4><i>Alla fine è solo una pagina di Progetti</i></h4>
            </div>

            <div class="d-flex justify-content-center home-btn">

                <router-link :to="{ name: 'projects.index' }" class="btn btn-sm main-btn-background text-light content z-3"
                    :class="startingClass">Progetti <font-awesome-icon icon="fa-solid fa-book" />
                </router-link>

                <img src="../images/hand-phone.png" class="hand-phone" alt="">
            </div>

        </div>
    </div>
</template>


<style scoped lang="scss">
.content {
    position: absolute;
    left: 51%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.hand-phone {
    width: 400px;
    position: relative;
}
</style>