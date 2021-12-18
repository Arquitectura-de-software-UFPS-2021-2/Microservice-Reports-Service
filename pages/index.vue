<template>
  <div class="pa-8 reporte">
    <h2 class="text-center">Consultar Usuarios Registrados</h2>
    <SelectoresFechas/>
  </div>
</template>

<script>
import SelectoresFechas from "@/components/SelectoresFechas";
export default {
  name: 'IndexPage',
  components: {
    SelectoresFechas
  }
}
</script>
<style lang="scss" scoped>
  .reporte {
    width: 100%;
  }
</style>
