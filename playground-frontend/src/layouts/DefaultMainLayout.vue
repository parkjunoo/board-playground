<template>
  <div>
    <MainHeader />
    <div class="main-content">
      <div class="main-content__right">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import MainHeader from '@/components/MainHeader.vue';
const props = defineProps({});
const emit = defineEmits([]);
</script>
<style lang="scss" scoped>
.main-content {
  display: flex;
  width: 100%;
  height: 100%;
  .main-content__left {
    width: 300px;
    height: 100%;
    background-color: #f5f5f5;
  }
  .main-content__right {
    flex: 1;
    height: 100%;
    background-color: #fff;
  }
}
</style>
