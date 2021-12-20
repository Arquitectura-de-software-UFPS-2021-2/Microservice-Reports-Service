<template>
    <div class="mb-4 mt-5">
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
              Hoy
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
              Esta Semana
            </v-chip>

            <v-chip 
              @click="establecerMes" 
              color="green" 
              outlined
            >
              <v-avatar left v-if="chipActivo == 2">
                <v-icon>mdi-checkbox-marked-circle</v-icon>
              </v-avatar>
              Este Mes
            </v-chip>
          </v-card-text>
        </div>
        <div v-if="usuariosFiltrados.length > 0">
            <div style="display: flex;justify-content: center;" class="mt-15">
              <v-btn
                color="red"
                class="ma-2 white--text"
                @click="descargarPDf(dateInicio, dateFin)"
              >
                Descargar PDF
                <v-icon
                  right
                  dark
                >
                  mdi-cloud-download
                </v-icon>
              </v-btn>
            </div>
            <div style="display: flex;justify-content: center;" class="mt-15">
              <v-btn
                color="green"
                class="ma-2 white--text"
                @click="exportExcel"
              >
                Descargar Excel
                <v-icon
                  right
                  dark
                >
                  mdi-cloud-download
                </v-icon>
              </v-btn>
            </div>
            <v-card style="visibility: hidden">
              <v-card-title>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Buscar"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                id="tabla"
                :headers="headers"
                :items="usuariosFiltrados"
                :search="search"
              ></v-data-table>
            </v-card>
        </div>
        <div v-else>
          <div style="display:flex; justify-content:center">
            <div>
              <img src="../assets/reports3.png" alt="" width="400px">
            </div>
          </div>
          <div>
            <h4 class="text-center" style="color:red">No se han encontrado registro</h4>
          </div>
        </div>
    </div>
</template>

<script>
import XLSX from "xlsx"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import axios from 'axios'
export default {
  name: 'DescargaReportes',

  data: () => ({
    menuFechaInicio: false,
    menuFechaFin: false,
    dateInicio: '',
    dateFin: '',
    chipActivo: 0,
    usuarios: [],
    usuariosFiltrados: [],
    search: '',
    headers: [
      { text: 'Código', value: 'code' },
      { text: 'Nombres', value: 'name' },
      { text: 'Apellidos', value: 'last_name' },
      { text: 'Dirección', value: 'address' },
      { text: 'Edad', value: 'age' },
      { text: 'Teléfono', value: 'phone' },
      { text: 'Email', value: 'email' },
      { text: 'Semestre', value: 'semester' },
      { text: 'Carrera', value: 'university_career' }
    ]
  }),
  created () {
    this.establecerHoy(),
    this.obtenerUsuarios(),
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
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => {
       //this.usuarios = response.data
        console.warn(response.data.results)
      })
      .catch((error) => {
        console.warn(response)
      })
      const usuariosTest = [
        {
            "code": 1151595,
            "name": "Cristian",
            "last_name": "camargo",
            "address": "calle 23",
            "age": "21",
            "phone": "14131",
            "email": "totobhcc@gmail.com",
            "semester": "decimo",
            "university_career": "ing. sistemas",
            "created_at": "2021-11-12T01:43:56.000000Z",
            "updated_at": "2021-11-12T01:43:56.000000Z"
        },
        {
            "code": 1151636,
            "name": "Jairo",
            "last_name": "garcia",
            "address": "calle 23",
            "age": "21",
            "phone": "14131",
            "email": "sebastian@gmail.com",
            "semester": "decimo",
            "university_career": "ing. sistemas",
            "created_at": "2021-10-12T19:32:06.000000Z",
            "updated_at": "2021-10-12T19:32:06.000000Z"
        },
        {
            "code": 1151636,
            "name": "sebastian",
            "last_name": "garcia",
            "address": "calle 23",
            "age": "21",
            "phone": "14131",
            "email": "sebastian@gmail.com",
            "semester": "decimo",
            "university_career": "ing. sistemas",
            "created_at": "2022-10-12T19:32:06.000000Z",
            "updated_at": "2022-10-12T19:32:06.000000Z"
        },
        {
            "code": 1151650,
            "name": "Pedro",
            "last_name": "garcia",
            "address": "calle 23",
            "age": "21",
            "phone": "14131",
            "email": "gabrielarturo@gil.com",
            "semester": "decimo",
            "university_career": "ing. sistemas",
            "created_at": "2021-12-12T23:08:55.000000Z",
            "updated_at": "2021-12-12T23:08:55.000000Z"
        },
        {
            "code": 1151651,
            "name": "Jose",
            "last_name": "garcia",
            "address": "calle 23",
            "age": "21",
            "phone": "14131",
            "email": "gabrielarturo@gmail.com",
            "semester": "decimo",
            "university_career": "ing. sistemas",
            "created_at": "2021-12-07T21:10:38.000000Z",
            "updated_at": "2021-12-07T21:10:38.000000Z"
        },
        {
            "code": 1151698,
            "name": "arturo",
            "last_name": "quintero",
            "address": "calle 23",
            "age": "21",
            "phone": "14131",
            "email": "arturo@gmail.com",
            "semester": "decimo",
            "university_career": "ing. sistemas",
            "created_at": "2021-12-13T15:44:54.000000Z",
            "updated_at": "2021-12-13T15:44:54.000000Z"
        }
      ]
      this.usuarios = usuariosTest
    },
    filtrarUsuarios() {
      const filtroUsuarios = this.usuarios.filter(item => (item.created_at.split('T')[0] <= this.dateFin) && (item.created_at.split('T')[0] >= this.dateInicio))
      this.usuariosFiltrados = filtroUsuarios
    },
    establecerHoy () {
      this.chipActivo = 0
      const fecha = new Date()
      const fechaEnFormato = fecha.toISOString().split('T')[0]
      this.dateInicio = fechaEnFormato
      this.dateFin = fechaEnFormato
    },
    establecerSemana () {
      this.chipActivo = 1
      const fecha = new Date()
      const fechaEnFormato = fecha.toISOString().split('T')[0]
      this.dateFin = fechaEnFormato

      const fechaInicio = new Date()
      fechaInicio.setDate(fecha.getDate() - 7)
      const fechaInicioEnFormato = fechaInicio.toISOString().split('T')[0]
      this.dateInicio = fechaInicioEnFormato
    },
    establecerMes () {
      this.chipActivo = 2
      const fecha = new Date()
      const fechaEnFormato = fecha.toISOString().split('T')[0]
      this.dateFin = fechaEnFormato

      const fechaInicio = new Date()
      fechaInicio.setDate(fecha.getDate() - 30)
      const fechaInicioEnFormato = fechaInicio.toISOString().split('T')[0]
      this.dateInicio = fechaInicioEnFormato
    },
    descargarPDf (inicio, fin) {
      document.getElementsByClassName("v-data-footer")[0].style="display:none"
      window.html2canvas = html2canvas
      var doc = new jsPDF("l", "pt", "a4")
      doc.html(document.getElementById("tabla"), {
        callback: function(pdf) {
          pdf.save(`report ${ inicio } to ${ fin }.pdf`)
        }
      })
    },
    exportExcel () {
      let data = XLSX.utils.json_to_sheet(this.usuariosFiltrados)
      const workbook = XLSX.utils.book_new()
      const filename = `report ${ this.dateInicio } to ${ this.dateFin }`
      XLSX.utils.book_append_sheet(workbook, data, filename)
      XLSX.writeFile(workbook, `${filename}.xlsx`)
    },
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
  #tabla {
    margin: 20px
  }
</style>
