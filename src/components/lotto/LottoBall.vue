<template>
  <div class="col-lg-2 mt-3 d-flex justify-content-around">
    <svg
      class="rounded-circle"
      margin="30"
      width="140"
      height="140"
      focusable="false"
    >
      <rect width="100%" height="100%" :fill="getColor()" />
      <text
        text-anchor="middle"
        x="50%"
        y="50%"
        fill="white"
        dy=".3em"
        font-size="60"
      >
        {{ getNumber() }}
      </text>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

const props = defineProps<{
  lottoNum: number;
}>();

const getNumber = (): number => {
  return props.lottoNum;
};

const getColor = (): string => {
  let color = "black";
  if (props.lottoNum > 0 && props.lottoNum <= 10) {
    color = "gold";
  } else if (props.lottoNum > 10 && props.lottoNum <= 20) {
    color = "green";
  } else if (props.lottoNum > 20 && props.lottoNum <= 30) {
    color = "gray";
  } else if (props.lottoNum > 30 && props.lottoNum <= 40) {
    color = "blue";
  } else {
    color = "black";
  }

  console.log(color);
  return color;
};

onMounted(() => {
  console.log(props.lottoNum);
});

console.log(props);
</script>

<style scoped></style>
