<template>
  <v-card
    class="mx-auto"
    width="300"
    tile
  >
    <v-list>
      <v-subheader>Reportes</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
      <NuxtLink to="/">
        <v-list-item>
          <v-list-item-icon>
            <v-icon> mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Consultar Registro Usuarios </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </NuxtLink>
      <NuxtLink to="/graficas">
        <v-list-item>
          <v-list-item-icon>
            <v-icon> mdi-clock </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Generar Graficas </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </NuxtLink>
      <NuxtLink to="/descargas">
        <v-list-item>
          <v-list-item-icon>
            <v-icon> mdi-download </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Descargar Reportes </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </NuxtLink>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'Aside',
    data: () => ({
      selectedItem: 0
    }),
}
</script>
<style lang="scss">
  a:link, a:visited, a:active {
    text-decoration:none;
  }
</style>
