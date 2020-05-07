//класс переводов
export class Transfer {
    constructor(
                public id: string, //ключ для LocalStorage
                public num1: string,
                public num2: string,
                public fio: string,
                public month: number,
                public year: number,
                public sum: number,
                public date: number) {}
}