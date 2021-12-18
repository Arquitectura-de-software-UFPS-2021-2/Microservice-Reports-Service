<template>
  <div class="pa-8 reporte">
    <h2 class="text-center">Grafica Registro de Usuarios</h2>
    <Grafica/>
  </div>
</template>

<script>
import Grafica from "@/components/Grafica";
export default {
  name: 'GraficasPage',
  components: { Grafica }
}
</script>
