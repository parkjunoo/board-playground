<template>
  <div>
    하이하이
    <b-table striped hover :items="items"></b-table>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, toRefs, watch, onMounted } from 'vue';
const props = defineProps({});
const emit = defineEmits([]);
const items = ref([
  { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { age: 38, first_name: 'Jami', last_name: 'Carney' },
]);
</script>
<style lang="scss" scoped></style>
