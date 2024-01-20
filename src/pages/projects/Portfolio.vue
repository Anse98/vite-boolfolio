<template>
    <div class="container py-5" v-if="projects.length > 0">
        <div class="pb-5 d-flex justify-content-center text-center">
            <h1 class="color-red title w-50">I nostri Progetti <font-awesome-icon icon="fa-solid fa-book-open" /></h1>
        </div>

        <div class="d-flex gap-5 flex-wrap py-4 justify-content-center">
            <ProjectCard v-for="project in projects" :project="project" :key="project.id" />
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

                <div class="d-flex gap-2 align-items-center" v-if="this.current_page > 1">
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

                <span class="text-white-50">
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
            store: store,
            current_page: 1,
            last_page: 1,
        }
    },

    methods: {
        fetchProjects(page) {
            axios.get(`${store.base_url}/projects?page=${page}`).then((res) => {
                this.projects = res.data.projects.data;
                console.log(res.data)
                this.current_page = res.data.projects.current_page
                this.last_page = res.data.projects.last_page
            })
        },

        nextPage() {
            if (this.current_page < this.last_page) {
                this.fetchProjects(this.current_page + 1)
                this.scrollToTop()
            }
        },

        prevPage() {
            if (this.current_page > 1) {
                this.fetchProjects(this.current_page - 1)
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
    }

}
</script>
  
<style lang="scss" scoped >
.bg-dark-grey {
    background-color: #121212;
}

.dash {
    width: 8px;
}

// .disabled {
//     border: none;
// }
</style>