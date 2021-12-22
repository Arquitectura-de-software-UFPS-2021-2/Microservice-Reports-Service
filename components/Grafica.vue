<template>
    <div class="mb-4 mt-5">
        <div>
          <v-card-text style="display:flex; justify-content: center">
            <v-chip
              class="mr-2"
              color="primary"
              @click="establecerHoy" 
              outlined
            >
              <v-avatar left v-if="chipActivo == 0">
                <v-icon>mdi-checkbox-marked-circle</v-icon>
              </v-avatar>
              Ultima Semana
            </v-chip>

            <v-chip
              class="mr-2"
              color="secondary" 
              outlined
              @click="establecerSemana"
            >
              <v-avatar left v-if="chipActivo == 1">
                <v-icon>mdi-checkbox-marked-circle</v-icon>
              </v-avatar>
              Ultimo Mes
            </v-chip>

            <v-chip 
              @click="establecerMes" 
              color="green" 
              outlined
            >
              <v-avatar left v-if="chipActivo == 2">
                <v-icon>mdi-checkbox-marked-circle</v-icon>
              </v-avatar>
              Ultimos 3 Meses
            </v-chip>
          </v-card-text>
        </div>
        <div class="contenedor-chart">
             <GChart
                type="ColumnChart"
                :data="chartData"
                :options="chartOptions"
              />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { GChart } from 'vue-google-charts'
export default {
  name: 'Grafica',
components: {
    GChart
  },
  data: () => ({
    chipActivo: 0,
    usuarios: [],
    usuariosFiltrados: [],
    chartData: [],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      },
      datosEstadisticos: []
  }),
  created () {
    this.obtenerUsuarios(),
    this.establecerHoy(),
    this.filtrarUsuarios()
  },
  watch: {
    dateInicio: function () {
      this.filtrarUsuarios()
    },
    dateFin: function () {
      this.filtrarUsuarios()
    }
  },
  methods: {
    obtenerUsuarios() {
      axios
      .post('http://18.235.152.56/students',{
        api_token:"Uhln2BZLQO6FcC0peIBSVmMNqA2KicvYhAXBepBVAZwRVwBxhnayKuQIb5sPYBEVRG7aXlYBQsNnTxNGzm6Z7eE4z18nowIKXW4rc9yCLuSvdahh0z5tuUH0yCO5fwJFG8hq3PcWuSdNMc0mUVKtSz"
      })
      .then((response) => {
        this.usuarios = response.data.data
      })
      .catch((error) => {
        console.warn(response)
      })
      //this.usuarios = []
    },
    filtrarUsuarios() {
      const filtroUsuarios = this.usuarios.filter(item => item.created_at !== null?(item.created_at.split('T')[0] <= this.dateFin) && (item.created_at.split('T')[0] >= this.dateInicio):'')
      this.usuariosFiltrados = filtroUsuarios
    },
    establecerHoy () {
      this.chipActivo = 0
      const fechaInicio = new Date()
      fechaInicio.setDate(fechaInicio.getDate() - 7)

      const fechaHoy = new Date()

      var datos = [['fecha', 'cantidad alumnos registrador por fecha']]
      var i = 0
      while (fechaInicio <= fechaHoy) {

        
          for (const usuario in this.usuarios) {
            if(this.usuarios[usuario].created_at !== null) {
              var created = this.usuarios[usuario].created_at.split('T')[0]
              if (created == fechaInicio.toISOString().split('T')[0]) {
                  i++
              }
            } 
          }
        datos.push([fechaInicio.toISOString().split('T')[0].substr(5,8), i])
        i = 0
        fechaInicio.setDate(fechaInicio.getDate() + 1)
      }
      this.chartData = datos
    },
    establecerSemana () {
      this.chipActivo = 1
      const fechaInicio = new Date()
      fechaInicio.setDate(fechaInicio.getDate() - 30)

      const fechaHoy = new Date()

      var datos = [['fecha', 'cantidad alumnos registrador por fecha']]
      var i = 0
      while (fechaInicio <= fechaHoy) {

        
          for (const usuario in this.usuarios) {
            if(this.usuarios[usuario].created_at !== null) {
            var created = this.usuarios[usuario].created_at.split('T')[0]
            if (created == fechaInicio.toISOString().split('T')[0]) {
                i++
              }
            }
          }
        datos.push([fechaInicio.toISOString().split('T')[0].substr(5,8), i])
        i = 0
        fechaInicio.setDate(fechaInicio.getDate() + 1)
      }
      this.chartData = datos
    },
    establecerMes () {
      this.chipActivo = 2
      const fechaInicio = new Date()
      fechaInicio.setDate(fechaInicio.getDate() - 93)

      const fechaHoy = new Date()

      var datos = [['fecha', 'cantidad alumnos registrador por fecha']]
      var i = 0
      while (fechaInicio <= fechaHoy) {

        
          for (const usuario in this.usuarios) {
            if(this.usuarios[usuario].created_at !== null) {
              var created = this.usuarios[usuario].created_at.split('T')[0]
              if (created == fechaInicio.toISOString().split('T')[0]) {
                  i++
              }
            } 
          }
        datos.push([fechaInicio.toISOString().split('T')[0].substr(5,8), i])
        i = 0
        fechaInicio.setDate(fechaInicio.getDate() + 1)
      }
      this.chartData = datos
    }
  },
};
</script>

<style lang="scss" scoped>
  .contenedor-fechas {
    display: flex;
    justify-content: space-evenly;
  }
  .active {
    color: white;
  }
  .contenedor-chart {
    div {
      width: 700px;
      height: 400px;
      padding-bottom: 15px;
    }
  }
</style>
