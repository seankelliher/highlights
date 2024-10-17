import { createRouter,createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import UsNationalParksAlerts from "./components/UsNationalParksAlerts.vue";
import GlobalFertilityRates from "./components/GlobalFertilityRates.vue";
import UsSenateDirectory from "./components/UsSenateDirectory.vue";
import CaliforniaTempsPrecip from "./components/CaliforniaTempsPrecip.vue";
import NycShootingIncidents from "./components/NycShootingIncidents.vue";
import MapCoordinatesDms from "./components/MapCoordinatesDms.vue";
import NycFirehouses from "./components/NycFirehouses.vue";
import NycPublicPools from "./components/NycPublicPools.vue";
import MtWashingtonTemperature from "./components/MtWashingtonTemperature.vue";
import ImgGallery from "./components/ImgGallery.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/us-national-parks-alerts", component: UsNationalParksAlerts },
    { path: "/global-fertility-rates", component: GlobalFertilityRates },
    { path: "/us-senate-directory", component: UsSenateDirectory },
    { path: "/california-temps-precip", component: CaliforniaTempsPrecip },
    { path: "/nyc-shooting-incidents", component: NycShootingIncidents },
    { path: "/map-coordinates-dms", component: MapCoordinatesDms },
    { path: "/nyc-firehouses", component: NycFirehouses },
    { path: "/nyc-public-pools", component: NycPublicPools },
    { path: "/mt-washington-temperature", component: MtWashingtonTemperature },
    { path: "/img-gallery", component: ImgGallery },
    { path: "/:catchAll(.*)", component: NotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;