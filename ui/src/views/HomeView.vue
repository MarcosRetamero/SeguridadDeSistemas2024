<template>
  <h1>{{ message }}</h1>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Email
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in users"
        :key="item.id"
      >
        <td>{{ item.email }}</td>
      </tr>
    </tbody>
  </v-table>

</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { apiHealthCheck } from '@/services/api-health-check';
import { getUserList, GetUserListResponse } from '@/services/user-api/get-list';

let message = ref("...");
let usersList: Array<GetUserListResponse> = [];
let users = ref(usersList);


onMounted(async () => {
  const healthCheckResponse = await apiHealthCheck();
  const getUserListResponse = await getUserList();
  users.value = getUserListResponse.data;
  message.value = healthCheckResponse.data.message;
});


</script>
