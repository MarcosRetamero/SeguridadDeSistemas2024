<template>
  <h1 style="margin-bottom: 15px;">Cryptographic Consign</h1>

  <div v-if="secretValue">
    <h3>En base al contenido de clases anteriores:</h3>
    <ul style="margin-left: 30px;">
      <li>Desencriptar el JWT</li>
      <li>Utilizar la informacion para acceder a la consigna</li>
      <li>Resolver la consigna</li>
    </ul>
  
    <br>
    <br>
  
    <h3>JWT:</h3>
    <p>{{ secretValue }}</p>
  </div>

  <p v-else>
    <b style="color: red;">Debes completar el tutorial de integración con MongoDB.</b>
  </p>

</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getCryptographicSecret } from '@/services/public-api';

let secretValue = ref("");

onMounted(async () => {
  const response = await getCryptographicSecret();
  secretValue.value = response.data;
});


</script>
