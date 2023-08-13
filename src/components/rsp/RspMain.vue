<template>
  <main>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4 d-flex justify-content-center">
          <div class="card" style="width: 18rem">
            <img v-bind:src="user.getImg()" class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title">당신</h5>
              <!-- <button class="btn btn-primary m-2 your-rsp">가위</button>
                <button class="btn btn-primary m-2 your-rsp">바위</button>
                <button class="btn btn-primary m-2 your-rsp">보</button> -->
              <button
                v-for="(rsp, index) in user.rspArr"
                :key="index"
                :id="index.toString()"
                class="btn btn-primary m-2"
                @click="user.resetRsp($event, computer)"
              >
                {{ rsp }}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center">
          <div class="card" style="width: 18rem">
            <img
              src="https://taegon.kim/wp-content/uploads/2018/05/image-5.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title">심판</h5>
              <p>{{ computer.getResult(user) }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center">
          <div class="card" style="width: 18rem">
            <img :src="computer.getImg()" class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title">컴퓨터</h5>
              <button id="rsp-btn-computer" class="btn btn-primary m-2">
                {{ computer.getRspString() }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import Player from "@/types/Player";
import { onMounted, reactive } from "vue";

const computer: Player = reactive(new Player("computer"));
const user: Player = reactive(new Player("user"));

onMounted(() => {
  console.log(computer);
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
