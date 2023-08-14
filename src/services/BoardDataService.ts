import http from '@/services/HttpCommon'
import Board from '@/types/Board'

//https://www.bezkoder.com/vue-3-typescript-axios/

class BoardDataService {
  getAll() {
    return http.get<Board>('/rboard/list')
  }

  getPagingList(path = '/rboard/list2', search = '') {
    return http.get(path + search)
  }

  remove(id: number) {
    console.log(id)
    return http.delete(`/rboard/${id}`)
  }
}

export default new BoardDataService()
