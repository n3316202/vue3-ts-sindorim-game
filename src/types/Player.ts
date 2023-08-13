class Player {
  private name: string;
  private rsp: number;
  private img: string;

  public rspArr = ["가위", "바위", "보"];
  public imgArr = [
    require("@/assets/rsp/img/scissor.jpg"),
    require("@/assets/rsp/img/rock.jpg"),
    require("@/assets/rsp/img/paper.jpg"),
  ];

  public constructor(name: string) {
    this.name = name;
    this.rsp = this.randomRsp();
    this.img = "https://taegon.kim/wp-content/uploads/2018/05/image-5.png";
  }

  public getResult(you: Player): string {
    let result = "";

    if (this.rsp == you.rsp) {
      console.log("비겻습니다.");
      result = "비겻습니다.";
      return result;
    }

    if (this.rspArr[this.rsp] == "가위") {
      if (this.rspArr[you.rsp] == "바위") result = "당신이 이겻니다.";
      else if (this.rspArr[you.rsp] == "보") result = "당신이 졋습니다";
    } else if (this.rspArr[this.rsp] == "바위") {
      if (this.rspArr[you.rsp] == "보") result = "당신이 이겼니다.";
      else if (this.rspArr[you.rsp] == "가위") result = "당신이 졌습니다";
    } else if (this.rspArr[this.rsp] == "보") {
      if (this.rspArr[you.rsp] == "가위") result = "당신이 이겻니다.";
      else if (this.rspArr[you.rsp] == "바위") result = "당신이 졌습니다";
    }

    return result;
  }

  public getImg(): string {
    return this.img;
  }

  public getRspString(): string {
    return this.rspArr[this.rsp];
  }

  public setImg(): void {
    this.img = this.imgArr[this.rsp];
  }

  public setRsp(rsp: number): void {
    this.rsp = rsp;
  }

  // function handleChange(event: Event) {
  //   console.log((event.target as HTMLInputElement).value)
  // }
  public resetRsp(event: Event, you: Player): void {
    const eventTarget = event.target as HTMLButtonElement;

    console.log(eventTarget.id);

    //자기꺼 변경
    this.rsp = this.rspArr.indexOf(eventTarget.innerText);
    this.setImg();

    //상대방꺼 변경
    you.setRsp(you.randomRsp());
    you.setImg();
  }

  public randomRsp(): number {
    return Math.floor(Math.random() * 3);
  }
}

export default Player;
