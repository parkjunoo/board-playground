<template>
  <div>gkdlgkdl</div>
</template>
<script lang="ts" setup>
import { ref, computed, toRefs, watch, onMounted } from 'vue';
import { getFirstData } from '../core/request';
const props = defineProps({});
const emit = defineEmits([]);
const test = ref('');

onMounted(async () => {
  await getFirstData().then(res => {
    console.log(res);
  });
});
</script>
<style lang="scss" scoped></style>
