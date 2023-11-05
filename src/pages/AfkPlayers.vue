<template>
    <div>
        <h1 class="grey--text mb-3">Zawodnicy</h1>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.id">
                <v-card class="ma-4">
                    <div class="d-flex justify-center pt-4 pb-2">
                        <v-avatar size="100">
                            <img :src="person.avatar">
                        </v-avatar>
                    </div>
                    <div class="d-flex justify-center">
                        <v-card-title class="pa-0">{{ person.name }}</v-card-title>
                    </div>
                    <v-card-subtitle class="text-center pa-0">{{ person.role }}</v-card-subtitle>
                    <v-card-actions class="d-flex justify-center pb-3">
                        <!-- <v-btn depressed>
                            <v-icon left>mdi-message</v-icon>
                            <span>Message</span>
                        </v-btn> -->
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                { id: 1, name: 'Antek Rudzik', role: 'Napastnik', avatar: '/soji.jpeg' },
                { id: 2, name: 'Hubert Hojwa', role: 'Pomocnik', avatar: '/apollonius.jpeg' },
                { id: 3, name: 'Kuba Kolstańczyk', role: 'Pomocnik', avatar: '/ethel.jpeg' },
                { id: 4, name: 'Wojtek', role: 'Bramkarz', avatar: '/zenke.jpeg' },
                { id: 5, name: 'Adaś Kwiecień', role: 'Obrońca', avatar: '/kiria.jpeg' },
                { id: 6, name: 'Mati', role: 'Pomocnik', avatar: '/emily.jpeg' },
            ]
        }
    }
}
</script>