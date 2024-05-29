<template>
  <h1>{{ message }}</h1>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Email
        </th>
        <th class="text-left">
          Resumen
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in users"
        :key="item.id"
      >
        <td>{{ item.email }}</td>
        <td>
          <v-btn
            color="primary"
            @click="showEditResumme(item)"
          >
            Edit
          </v-btn>
          <v-btn
            color="success"
            @click="setAndShowResumme(item.resumme)"
          >
            View
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-dialog
    max-width="800"
    persistent
    :model-value="showResumme"
  >
    <v-card title="User Resumme">
      <v-card-text>
        <div v-html="resumme"></div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text="Close"
          color="error"
          @click="showResumme = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog
    max-width="800"
    persistent
    :model-value="showEditableResumme"
  >
    <v-card title="Update Resumme">
      <v-card-text>
        <TextEditor
          v-model:model-value="editableItem.resumme"
        >
        </TextEditor>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="primary"
          @click="updateEditableitem"
        >
          Save
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          @click="showEditableResumme = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import TextEditor from '@/components/TextEditor.vue';
import { apiHealthCheck } from '@/services/api-health-check';
import { getUserList, GetUserListResponse } from '@/services/user-api/get-list';
import { updateUserResumme, UpdateUserResummeRequest } from '@/services/user-api/update-resumme';

let resumme = ref("");
let showResumme = ref(false);

let editableItem = ref(new GetUserListResponse());
let showEditableResumme = ref(false);

let message = ref("...");
let usersList: Array<GetUserListResponse> = [];
let users = ref(usersList);

const setAndShowResumme = (userResumme: string|null) => {
  resumme.value = userResumme ?? "";
  showResumme.value = true;
};

const showEditResumme = (item:GetUserListResponse) => {
  editableItem.value = item;
  showEditableResumme.value = true;
};

const updateEditableitem = async () => {
  const request = new UpdateUserResummeRequest(
    editableItem.value.id,
    editableItem.value.resumme,
  )
  await updateUserResumme(request)
  await fetchUserList();
  showEditableResumme.value = false;
};

const fetchUserList = async () => {
  const getUserListResponse = await getUserList();
  users.value = getUserListResponse.data;
};

onMounted(async () => {
  const healthCheckResponse = await apiHealthCheck();
  message.value = healthCheckResponse.data.message;
  await fetchUserList();
});


</script>
