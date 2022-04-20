<script setup lang="ts">
import { MenuKeys } from "../utils"
import { useMenuStore } from "../store/menu"

import MBPZ from "../pages/MBPZ.vue"
import TXPZ from "../pages/TXPZ.vue"
import SJJY from "../pages/SJJY.vue"
import CZCS from "../pages/CZCS.vue"
import JLCS from "../pages/JLCS.vue"
import LBWJ from "../pages/LBWJ.vue"
import WJCS from "../pages/WJCS.vue"
import SFTP from "../pages/SFTP.vue"
import TBD1 from "../pages/TBD1.vue"
import TBD2 from "../pages/TBD2.vue"


console.log(MenuKeys)

const store = useMenuStore()
const t = store.active

</script>

<template>
    <h1>{{store.active}}</h1>
    <component :is="MenuKeys[store.active]"></component>
</template>