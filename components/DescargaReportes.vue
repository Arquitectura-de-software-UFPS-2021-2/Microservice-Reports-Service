<template>
    <div class="mb-4 mt-5">
        <div v-if="true">
            <div class="contenedor-fechas">
          <div>
            <v-menu
              v-model="menuFechaInicio"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateInicio"
                  label="Fecha Inicio"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="dateInicio"
                no-title
                @input="menuFechaInicio = false"
              ></v-date-picker>
            </v-menu>
          </div>
          <div style="width:50px"></div>
          <div>
            <v-menu
              v-model="menuFechaFin"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFin"
                  label="Fecha Fin"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                color="green lighten-1"
                header-color="primary"
                v-model="dateFin"
                no-title
                @input="menuFechaFin = false"
              ></v-date-picker>
            </v-menu>
          </div>
        </div>
            <img src="../assets/reports3.png" alt="" width="400px">
        </div>
    </div>
</template>

<script>
export default {
  name: 'DescargaReportes',
  data: () => ({
    menuFechaInicio: false,
    menuFechaFin: false,
    dateInicio: '',
    dateFin: '',
  }),
};
</script>

<style lang="scss" scoped>
 .contenedor-fechas {
    display: flex;
    justify-content: space-evenly;
  }
</style>
