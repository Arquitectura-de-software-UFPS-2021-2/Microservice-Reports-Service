<template>
  <v-app>
    <v-main>
      <v-container mt-5>
        <div class="contenedor">
          <div class="aside">
            <Aside />
          </div>
          <v-card class="contenido ml-5" elevation="2">
            <Nuxt />
          </v-card>
        </div>
      </v-container>
      <v-footer padless fixed>
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>TotoDev</strong>
        </v-col>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import Aside from '../components/Aside.vue'
export default {
  components: { Aside },
  name: 'DefaultLayout',
  data () {
    return {
      //
    }
  }
}
</script>
<style lang="scss" scoped>
  .contenedor {
    height: 650px;
    display: flex;
    .contenido {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
</style>
