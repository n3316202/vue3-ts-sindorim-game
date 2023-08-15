// class Board {
//   //즉, 객체가 생성될 때, 생성자의 매개변수로 전달된 값은, 객체의 프로퍼티 값으로
//   // 자동으로 그 값이 초기화되고 할당된다.
//   public constructor(public bid: number, public bname: string) {}
// }

interface Board {
  bcontent?: string
  bdate?: string
  bgroup?: number
  bhit?: number
  bid?: number
  bindent?: number
  bname?: string
  bstep?: number
  btitle?: string
}

export default Board
