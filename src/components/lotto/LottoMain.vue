<template>
  <div class="container text-center">
    <div class="row mt-sm-5">
      <LottoBall
        v-for="num in lottoSet.nums"
        :key="num"
        :lottoNum="num"
      ></LottoBall>
    </div>

    <button type="button" class="btn btn-primary mt-5" @click="getLottoNum">
      번호 다시 생성
    </button>
  </div>
</template>

<script lang="ts" setup>
import LottoBall from "@/components/lotto/LottoBall.vue";
import { onMounted, reactive, computed } from "vue";

let lottoSet = reactive({
  nums: new Set<number>(),
});

onMounted(() => {
  getLottoNum();
  console.log(lottoSet);
});

const getLottoNum = (): void => {
  lottoSet.nums = new Set<number>();

  while (lottoSet.nums.size != 6) {
    const lottoNum = Math.ceil(Math.random() * 45 + 1);
    lottoSet.nums.add(lottoNum);
  }
  console.log(lottoSet.nums);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
