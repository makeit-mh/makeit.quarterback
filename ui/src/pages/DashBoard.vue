<template>
    <div>
        <h1 class="grey--text ml-3 mb-4">Dashboard</h1>
        <v-layout align-center justify-center>
            <div>
                <v-btn depressed class="mb-4 mr-3" @click="sortBy('title')">
                    <span>Sortuj wg turnieju</span>
                    <v-icon right>mdi-folder</v-icon>
                </v-btn>
                <v-btn depressed class="mb-4 mr-3" @click="sortBy('name')">
                    <span>Sortuj wg trenera</span>
                    <v-icon right>mdi-account</v-icon>
                </v-btn>
                <v-btn depressed class="mb-4" @click="sortBy('status')">
                    <span>Sortuj wg statusu</span>
                    <v-icon right>mdi-list-status</v-icon>
                </v-btn>
            </div>
        </v-layout>
        <v-container>
            <v-card v-for="project in projects" :key="project.id" :class="`project ${project.status}`">
                <v-layout row wrap class="mx-4 mb-8 pa-4">
                    <v-flex xs12 md6 class="pb-1">
                        <div class="caption grey--text">Nazwa turnieju</div>
                        <div>{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2 class="pb-1">
                        <div class="caption grey--text">Trener</div>
                        <div>{{ project.name }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md1 class="pb-1">
                        <div class="caption grey--text">Zawodników</div>
                        <div>{{ project.players }}</div>
                    </v-flex>
                    <v-flex xs4 sm4 md1 class="pb-1">
                        <div class="caption grey--text">Data</div>
                        <div>{{ project.due }}</div>
                    </v-flex>
                    <v-flex xs6 sm3 md1 class="pb-1">
                        <div class="caption grey--text">Miejsce</div>
                        <div>{{ project.city }}</div>
                        <div>{{ project.address }}</div>
                    </v-flex>
                    <v-flex xs6 sm3 md1 class="pb-1 d-flex align-center justify-sm-end">
                        <v-chip :class="`white--text ${project.color}`">{{ project.status }}</v-chip>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                { id: 1, title: 'Sparing1', city: 'Wrocław', address: 'ul. Gitarowa 12', name: 'Sebastian Mordal', due: '2023/10/01', status: 'przełożony', color: 'overdue', players: 12, },
                { id: 2, title: 'Sparing2', city: 'Wrocław', address: 'ul. Gitarowa 12', name: 'Paulina Mordal', due: '2023/10/01', status: 'nadchodzący', color: 'ongoing', players: 6, },
                { id: 3, title: 'Sparing3', city: 'Wrocław', address: 'ul. Gitarowa 12', name: 'Paulina Mordal', due: '2023/10/01', status: 'zakończony', color: 'completed', players: 7, },
                { id: 4, title: 'Sparing4', city: 'Wrocław', address: 'ul. Gitarowa 12', name: 'Paulina Mordal', due: '2023/10/01', status: 'nadchodzący', color: 'ongoing', players: 5, },
            ]
        }
    },
    methods: {
        sortBy(prop) {
            this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1);
        }
    }
}
</script>

<style>
.project.completed {
    border-left: 4px solid turquoise;
}

.project.ongoing {
    border-left: 4px solid orange;
}

.project.overdue {
    border-left: 4px solid tomato;
}

.v-chip.completed {
    background: turquoise !important;
}

.v-chip.ongoing {
    background: orange !important;
}

.v-chip.overdue {
    background: tomato !important;
}
</style>