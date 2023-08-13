import { defineStore } from "pinia";
import Board from "@/types/Board";
import BoardDataService from "@/services/BoardDataService";

const useBoardStore = defineStore("boardState", {
  state: () => ({
    boards: [] as Board[],
  }),
  getters: {
    getBoards(state): Board[] {
      return state.boards;
    },
  },
  actions: {
    async fetchBoards() {
      await BoardDataService.getPagingList()
        .then((response) => {
          this.boards = response.data.boards;
          console.log(response.data);
          console.log(this.boards);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});

export default useBoardStore;
