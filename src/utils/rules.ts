import dayjs, {Dayjs} from 'dayjs';


export const rules = { // объект
   required: (message: string = "Required field!") => ({ // функция
      required: true, 
      message
   }),
   isDateAfter: (message: string) => () => ({
      validator(_: any, value: dayjs.Dayjs) {
         if (dayjs(value) >= dayjs()) {
            return Promise.resolve();
       }
       return Promise.reject(new Error(message));
    },
  })
}
