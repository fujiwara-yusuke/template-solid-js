export class Player {
  id: number;
  name: string;
  text: string;
  selectedId: number;
  isBestSense: boolean;
  score: number;

  constructor(id: number, name: string, age: number, nationality: string) {
    this.id = id;
    this.name = name ? name : "ๅ็กใ";
    this.text = ""
    this.selectedId = 0;
    this.isBestSense =false;
    this.score = 0;
  }
}