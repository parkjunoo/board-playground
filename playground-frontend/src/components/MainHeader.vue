<template>
  <div class="main-header">header</div>
</template>
<script lang="ts" setup>
import { ref, computed, toRefs, watch, onMounted } from 'vue';
const props = defineProps({});
const emit = defineEmits([]);
</script>
<style lang="scss" scoped>
.main-header {
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
}
</style>
