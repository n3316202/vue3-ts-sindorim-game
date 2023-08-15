import { defineStore } from 'pinia'
import Board from '@/types/Board'
import BoardDataService from '@/services/BoardDataService'
import Paging from '@/types/Paging'
import Criteria from '@/types/Criteria'

const useBoardStore = defineStore('boardState', {
  state: () => ({
    boards: [] as Board[],
    paging: new Paging(new Criteria(1, 10), 1, 1, false, false, 0) as Paging
  }),
  getters: {
    getBoards(state): Board[] {
      return state.boards
    }
  },
  actions: {
    async fetchBoards() {
      await BoardDataService.getPagingList()
        .then((response) => {
          this.boards = response.data.boards

          this.paging = new Paging(
            new Criteria(response.data.page.cri.pageNum, response.data.page.cri.amount),
            response.data.page.endPage,
            response.data.page.startPage,
            response.data.page.next,
            response.data.page.pre,
            response.data.page.total
          )

          console.log(response.data)
          console.log(this.boards)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    async onClickPaging(param: string) {
      console.log('onClickPaging 스트링' + param)
      const splits = String(param).split('?')

      await BoardDataService.getPagingList(splits[0], '?' + splits[1])
        .then((response) => {
          this.boards = response.data.boards
          this.paging = new Paging(
            new Criteria(response.data.page.cri.pageNum, response.data.page.cri.amount),
            response.data.page.endPage,
            response.data.page.startPage,
            response.data.page.next,
            response.data.page.pre,
            response.data.page.total
          )

          console.log(this.boards)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    async deleteBoard(bid: string) {
      console.log('deleteBoard() 번호' + bid)

      await BoardDataService.remove(Number(bid))
        .then((response) => {
          console.log(response.data + '삭제됨')
        })
        .catch((e) => {
          console.log(e)
        })
    },
    async writeBoard(board: Board) {
      console.log('Wirte 보드' + board.btitle)
      console.log('Wirte 보드' + board.bcontent)
      console.log('Wirte 보드' + board.bname)

      await BoardDataService.write(board)
        .then((response) => {
          console.log('Write 성공' + response.data)
        })
        .catch((e) => {
          console.log('Write 실패' + e)
        })
    }
  }
})

export default useBoardStore
