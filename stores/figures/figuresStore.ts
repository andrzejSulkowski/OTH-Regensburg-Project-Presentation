import { defineStore } from 'pinia'
import { IFigure } from './figure.model'

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
    getIndex(){
      console.log("HIT")
      let currentCounter = this.counter;
      this.counter++;
      return currentCounter
    }
  }
})