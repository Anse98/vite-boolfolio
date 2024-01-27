<template>
    <div class="container py-5" v-if="projects.length > 0">
        <div class="d-flex justify-content-center text-center mb-5">
            <div class="title">
                <h1 class="color-red">I miei Progetti</h1>
                <img class="project-pick" src="/src/images/projects-list.png">
            </div>
        </div>

        <!-- Buttons per flitrare -->
        <div class="d-flex gap-3 align-items-center justify-content-center mb-3">

            <div class="btn btn-sm main-btn-background text-light" v-for="type in types"
                @click=" type.projects.length > 0 ? [fetchProjects(1, type.id), showBackBtn()] : showMessage()">
                {{ type.name }}
            </div>

        </div>

        <div class="d-flex justify-content-end">
            <span class="btn btn-sm main-btn-background text-light back-btn" :class="{ block: visible }"
                @click="[fetchProjects(), this.visible = false]">Elimina filtri</span>
        </div>

        <!-- cards dei progetti -->

        <div class="d-flex gap-5 flex-wrap py-4 justify-content-center">
            <ProjectCard v-for=" project  in  projects " :project="project" :key="project.id" />
        </div>

        <!-- PAGINATION -->

        <div class="page-buttons d-flex justify-content-center gap-4 p-5">
            <!-- pagina precedente -->
            <div class="btn main-btn-background text-light d-flex gap-2 align-items-center" @click="prevPage()"
                :class="{ disabled: this.current_page === 1 }">

                <span v-if="this.current_page !== 1">
                    ({{ this.current_page - 1 }})
                </span>

                <span>
                    <font-awesome-icon icon="fa-solid fa-hand-point-left" />
                </span>
            </div>

            <!-- pagina corrente - pagine totali -->
            <div class="d-flex gap-2 align-items-center">

                <div class="d-flex gap-2 align-items-center" v-if="this.current_page > 2">
                    <div class="btn main-btn-background text-light" @click="goToPageOne()">
                        <span>1</span>
                    </div>

                    <div class="text-white-50" v-if="this.current_page > 2">
                        <span>...</span>
                    </div>
                </div>

                <div class="btn disabled main-btn-background text-light">
                    <span>{{ this.current_page }}</span>
                </div>

                <span class="text-white-50" v-if="this.current_page < this.last_page - 1">
                    ...
                </span>

                <div class="btn disabled main-btn-background text-light border-secondary">
                    <span>{{ this.last_page }}</span>
                </div>

            </div>

            <!-- pagina successiva -->
            <div class="btn main-btn-background text-light d-flex gap-2 align-items-center" @click="nextPage()"
                :class="{ disabled: this.current_page === this.last_page }">

                <span>
                    <font-awesome-icon icon="fa-solid fa-hand-point-right" />
                </span>

                <span v-if="this.current_page !== this.last_page">
                    ({{ this.current_page + 1 }})
                </span>
            </div>

        </div>

        <!-- FINE PAGINATION -->

    </div>

    <div class="container spinner-container pt-5" v-else>
        <div class="spinner"></div>
    </div>
</template>
  
<script>
import axios from 'axios';
import { store } from '../../store';
import ProjectCard from '../../components/ProjectCard.vue';

export default {
    components: {
        ProjectCard,
    },

    data() {
        return {
            projects: [],
            types: [],
            store: store,
            current_page: 1,
            last_page: 1,
            currentTypeId: null,
            visible: false
        }
    },

    methods: {
        fetchProjects(page, typeId) {
            axios.get(`${store.base_url}/projects?page=${page}`, { params: { type_id: typeId } }).then((res) => {
                this.projects = res.data.projects.data;
                this.current_page = res.data.projects.current_page
                this.last_page = res.data.projects.last_page
                this.currentTypeId = typeId
                console.log(res.data)
            })
        },

        fetchTypes() {
            axios.get(`${store.base_url}/types`).then((res) => {
                this.types = res.data.types
                console.log(res.data)
            })
        },

        showMessage() {
            this.$router.push('/projects-not-found')
        },

        showBackBtn() {
            this.visible = true
        },

        nextPage() {
            if (this.current_page < this.last_page) {
                this.fetchProjects(this.current_page + 1, this.currentTypeId)
                this.scrollToTop()
            }
        },

        prevPage() {
            if (this.current_page > 1) {
                this.fetchProjects(this.current_page - 1, this.currentTypeId)
                this.scrollToTop()
            }
        },

        goToPageOne() {
            this.fetchProjects(1)
            this.scrollToTop()
        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
            });
        },
    },

    created() {
        this.fetchProjects();
        this.fetchTypes();
    }

}
</script>
  
<style lang="scss" scoped >
.bg-dark-grey {
    background-color: #121212;
}

.back-btn {
    display: none;
}

.title {
    position: relative;
    width: 450px;
}

.project-pick {
    width: 80px;
    position: absolute;
    right: 0;
    top: 0;
}

.text-light.block {
    display: block;
}
</style>