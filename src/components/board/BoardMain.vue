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
          <hr />
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-primary" @click="launchModal">글쓰기</button>
          </div>
          <!-- 모달 스타트 -->
          <Modal v-model="dialogVisible" title="글쓰기">
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">작성자:</label>
              <input type="text" class="form-control" v-model="board.bname" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">제목:</label>
              <input type="text" class="form-control" v-model="board.btitle" />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">내용:</label>
              <textarea class="form-control" rows="8" v-model="board.bcontent"></textarea>
            </div>

            <template #footer>
              <button type="button" class="btn btn-primary" @click="saveChanges">글쓰기</button>
              <button type="button" class="btn btn-secondary" @click="closeModal">취소</button>
            </template>
          </Modal>
          <!-- 모달 끝 -->
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
//모달를 통한 글쓰기
import { ref, reactive } from 'vue'
import Modal from '@/components/modal/CustomModal.vue'
import Board from '@/types/Board'

const board = reactive<Board>({
  btitle: '',
  bcontent: '',
  bname: ''
})

const dialogVisible = ref(false)

function launchModal() {
  dialogVisible.value = true
}

function closeModal() {
  dialogVisible.value = false
}

async function saveChanges() {
  await boardStore.writeBoard(board)
  //입력후 처음으로
  await boardStore.fetchBoards()

  board.btitle = ''
  board.bcontent = ''
  board.bname = ''

  closeModal()
}
</script>

<style scoped></style>
