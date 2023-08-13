<template>
  <div class="container mt-3">
    <div class="container-fluid">
      <h1 class="text-center h3 mb-2 text-gray-800 mt-4">게시판</h1>

      <div class="card shadow mb-4 mt-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr class="text-center">
                  <th>번호</th>
                  <th>이름</th>
                  <th>제목</th>
                  <th>날짜</th>
                  <th>히트</th>
                  <th class="text-center">삭제</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  class="text-center"
                  v-for="board in boards"
                  :key="board.bid"
                >
                  <td>{{ board.bid }}</td>
                  <td>{{ board.bname }}</td>
                  <td>
                    <router-link :to="'/board/' + board.bid">{{
                      board.btitle
                    }}</router-link>
                  </td>
                  <td>{{ board.bhit }}</td>
                  <td>{{ board.bdate }}</td>
                  <td>
                    <button
                      class="btn btn-success"
                      :value="board.bid"
                      v-on:click="deleteBoard"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <button v-if="state.paging.pre" class="page-link" :value="makePrevious" aria-label="Previous" @click="onClickPaging">&laquo;</button>
              </li>
              <li class="page-item" v-for="num in range(state.paging.startPage, state.paging.endPage)" :key="num">
                <button :value="makeLink(num)" class="page-link" @click="onClickPaging">{{ num }}</button>
              </li>

              <li class="page-item">
                <button v-if="state.paging.next" class="page-link" :value="makeNext" aria-label="Next" @click="onClickPaging">&raquo;</button>
              </li>
            </ul>
          </nav> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import useBoardStore from "@/store/BoardStore";

const boardStore = useBoardStore();
const { boards } = storeToRefs(boardStore);

onMounted(() => {
  console.log("스타트");
  boardStore.fetchBoards();
  console.log(boardStore.getBoards);

  // BoardDataService.getAll()
  //   .then((response: AxiosResponse<Board[]>) => {
  //     console.log(response.data);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
});
</script>

<style scoped></style>
