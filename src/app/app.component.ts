import { Component } from '@angular/core';
import { Char } from './char.interface'

@Component({
  selector: 'app-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'technologie';

  public shouldComponentExist: boolean = true;

  public chosenLetter: string = "";

  public letterToSend = 'A';

  public char: Char = {
    letter: 'B',
    id: 1
  };

  public onLetterClicked(letter: string): void {
    console.log("Kliknięto:", letter);
  }

  public changeLetter(): void {
    this.char = {
      letter: "A",
      id: 2
    };
  };

  public toggleComponentVisibility(): void {
      this.shouldComponentExist = !this.shouldComponentExist;
  }

  public letters: Char[] = [
    {letter:"a", id:1},
    {letter:"S", id:2},
    {letter:"d", id:3},
    {letter:"F", id:4}
  ];


  public choseLetter(letter: string): void{
this.chosenLetter = this.chosenLetter;
  }

  // public classes = { 'clickedButton': chosenLetter === letter.letter};

  public getClasses(letter: string): {'clicked-button': boolean} {
    return {'clicked-button': this.chosenLetter === letter};
  }

};
