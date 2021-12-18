<template>
  <div class="pa-8 reporte">
    <h2 class="text-center">Descargar Reportes</h2>
    <DescargaReportes/>
  </div>
</template>

<script>
import DescargaReportes from "@/components/DescargaReportes";
export default {
  name: 'ReportesPage',
  components: { DescargaReportes }
}
</script>
