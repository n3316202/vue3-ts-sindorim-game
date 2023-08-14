import Criteria from './Criteria'

class Paging {
  cri: Criteria

  endPage: number
  startPage: number

  next: boolean
  pre: boolean
  total: number

  constructor(cri: Criteria, endPage: number, startPage: number, next: boolean, pre: boolean, total: number) {
    this.cri = cri

    this.endPage = endPage
    this.startPage = startPage
    this.next = next
    this.pre = pre
    this.total = total
  }

  public makePrevious(): string {
    console.log('makePrevious ..' + this.startPage + ':' + this.cri.amount)
    return '/rboard/list2' + '?pageNum=' + (this.startPage - 10) + '&' + 'amount=' + this.cri.amount
  }

  public makeNext(): string {
    console.log('makeNext ..')
    return '/rboard/list2' + '?pageNum=' + (this.endPage + 1) + '&' + 'amount=' + this.cri.amount
  }

  public onClickPaging = (e: Event) => {
    const eventTarget = e.target as HTMLButtonElement

    console.log(eventTarget.value)
    //store.dispatch('onClickPaging', e.target.value)
  }

  public range(): number[] {
    const list = []
    for (let i = this.startPage; i <= this.endPage; i++) list.push(i)
    console.log(list)
    return list
  }

  public makeLink = (i: number) => {
    console.log('makeLink..')
    return '/rboard/list2' + '?pageNum=' + i + '&' + 'amount=' + this.cri.amount
  }
}

export default Paging
