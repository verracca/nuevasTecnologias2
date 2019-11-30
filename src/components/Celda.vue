<template>
  <div @click="$emit('click')" class="cell">
    <span v-if="ficha !== ''">{{ ficha }}</span>
  </div>
</template>

<script>
export default {
  props: {
    ficha: String
  }
};
</script>
<style>
.cell {
  width: 64px;
  height: 64px;
  border: 2px solid rgb(75, 75, 75);
  font-size: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
