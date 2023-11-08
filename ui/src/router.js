import Vue from "vue";
import VueRouter from "vue-router";

import DashBoard from '@/pages/DashBoard.vue';
import AfkSparrings from '@/pages/AfkSparrings.vue';
import AfkTrainings from '@/pages/AfkTrainings.vue';
import AfkTournaments from '@/pages/AfkTournaments.vue';
import AfkPlayers from '@/pages/AfkPlayers.vue';
import AfkCoaches from '@/pages/AfkCoaches.vue';
import AfkTeams from '@/pages/AfkTeams.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: DashBoard },
        { path: '/sparrings', component: AfkSparrings },
        { path: '/players', component: AfkPlayers },
        { path: '/coaches', component: AfkCoaches },
        { path: '/tournaments', component: AfkTournaments },
        { path: '/trainings', component: AfkTrainings },
        { path: '/teams', component: AfkTeams },
    ]
})