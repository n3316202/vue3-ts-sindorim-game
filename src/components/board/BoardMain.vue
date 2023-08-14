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
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                <tr class="text-center" v-for="board in boards" :key="board.bid">
                  <td>{{ board.bid }}</td>
                  <td>{{ board.bname }}</td>
                  <td>
                    <router-link :to="'/board/' + board.bid">{{ board.btitle }}</router-link>
                  </td>
                  <td>{{ board.bhit }}</td>
                  <td>{{ board.bdate }}</td>
                  <td>
                    <button class="btn btn-success" :value="board.bid" @click="deleteBoard">삭제</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <button v-if="paging.pre" class="page-link" :value="paging.makePrevious()" aria-label="Previous" @click="onClickPaging">&laquo;</button>
                </li>

                <li class="page-item" v-for="num in paging.range()" :key="num">
                  <button :value="paging.makeLink(num)" class="page-link" @click="onClickPaging">
                    {{ num }}
                  </button>
                </li>

                <li class="page-item">
                  <button v-if="paging.next" class="page-link" :value="paging.makeNext()" aria-label="Next" @click="onClickPaging">&raquo;</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import useBoardStore from '@/store/BoardStore'

const boardStore = useBoardStore()
const { boards, paging } = storeToRefs(boardStore)

onMounted(() => {
  console.log('스타트')
  boardStore.fetchBoards()
  console.log(boardStore.getBoards)
})

const onClickPaging = (e: Event) => {
  const eventTarget = e.target as HTMLButtonElement
  console.log(eventTarget.value)
  boardStore.onClickPaging(eventTarget.value)
}

const deleteBoard = async (e: Event) => {
  const eventTarget = e.target as HTMLButtonElement
  console.log(eventTarget.value)

  //삭제후 다시 업데이트를 위함
  await boardStore.deleteBoard(eventTarget.value)
  await boardStore.onClickPaging(boardStore.paging.makeLink(boardStore.paging.cri.pageNum))
}
</script>

<style scoped></style>
