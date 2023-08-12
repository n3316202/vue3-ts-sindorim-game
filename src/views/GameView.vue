<template>
  <div id="game">
    <GameHeader></GameHeader>
    <router-view />
    <game-footer></game-footer>
  </div>
</template>

<script setup lang="ts">
import GameHeader from "@/components/global/GameHeader.vue";
import GameFooter from "@/components/global/GameFooter.vue";
</script>

<style scoped>
#game {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
