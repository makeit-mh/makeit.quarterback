<template>
    <nav>
        <v-snackbar v-model="snackbar" color="indigo">
            <div class="d-flex justify-space-between">
                <span>Turniej {{ title }} dodany z powodzeniem</span>
                <v-icon color="white">mdi-check-circle</v-icon>
            </div>
        </v-snackbar>
        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-uppercase grey--text">
                <div class="d-flex">
                    <img src="/favicon.jpg" height="30px">
                    <span class="font-weight-light">AFC</span>
                    <span>First Kick</span>
                </div>
            </v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn text>
                <span>Wyloguj</span>
                <v-icon right>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app class="blue">
            <div class="mt-5 d-flex justify-center">
                <v-avatar size="160">
                    <img src="/first_kick.jpg">
                </v-avatar>
            </div>
            <div>
                <h2 class="white--text text-center my-3">AFC First Kick</h2>
            </div>
            <div class="d-flex justify-center mb-2">
                <pop-up @addedProject="showSnackBar"></pop-up>
            </div>
            <div class="d-flex justify-center mb-2">
                <sign-in-player @addedProject="showSnackBar"></sign-in-player>
            </div>
            <v-list>
                <v-list-item v-for="link in links" :key="link.name" :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import PopUp from './PopUp.vue';
import SignInPlayer from './SignInPlayer.vue';

export default {
    emits: ['addedProject'],
    components: {
        PopUp,
        SignInPlayer
    },
    data() {
        return {
            snackbar: false,
            drawer: false,
            title: '',
            links: [
                { icon: 'mdi-view-dashboard', name: 'Dashboard', route: '/' },
                { icon: 'mdi-account-school', name: 'Sparingi', route: '/sparrings' },
                { icon: 'mdi-bike-fast', name: 'Treningi', route: '/trainings' },
                { icon: 'mdi-family-tree', name: 'Turnieje', route: '/tournaments' },
                { icon: 'mdi-badge-account-horizontal', name: 'Zawodnicy', route: '/players' },
                { icon: 'mdi-badge-account-outline', name: 'Trenerzy', route: '/coaches' },
                { icon: 'mdi-human-queue', name: 'Drużyny', route: '/teams' },
            ]
        }
    },
    methods: {
        showSnackBar(title) {
            this.title = title;
            this.snackbar = true;
        }
    }
}
</script>

<style>
.v-app-bar-title__placeholder,
.v-app-bar-title__content {
    text-overflow: clip !important;
    overflow: visible !important;
}
</style>