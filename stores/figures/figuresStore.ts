import { defineStore } from 'pinia'
import { IFigure } from './figure.model'
import { ref } from 'vue'

interface IFigureStore{
  counter: Number,
  elements: IFigure[]
}

export const useFigureStore = defineStore({
  id: 'figures',
  state: () => ({
    counter: 1,
    elements: [],
  } as IFigureStore),

  actions: {
    addFigure(figure:IFigure){
      let myFig = figure

      if(!this.elements.some((fig) => fig.id === figure.id)){
        this.elements.push(figure)
        figure.counter = this.counter
        this.counter++;
      }else{
        myFig = this.elements.find((fig) => fig.id === figure.id)
      }
    
      return myFig.counter
    },
    reset(){
      this.counter = 1
      this.elements = []
      console.log("Figures Store got reset")
    }
  }
})