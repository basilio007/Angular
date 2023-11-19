export class Photo {
    img: string;
    description: string;
    locked: boolean;
  
    constructor(description: string) {
      this.img = 'https://picsum.photos/200/200';
      

      this.description = description;
      this.locked = false;
    }
  
    getImgUrl(): string {
      return this.locked ? 'candado.jpg' : this.img;
    }
  
    changeLock() {
      this.locked = !this.locked;
    }
  }
  