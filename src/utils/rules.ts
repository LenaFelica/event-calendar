

export const rules = { // объект
   required: (message: string = "Required field!") => ({ // функция
      required: true, 
      message
   })
}