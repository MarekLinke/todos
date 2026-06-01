const date1=new Date(2024,6,18,10,24);
const date2=new Date(2024,6,19,14,47);

const todos = [
    {
        title: 'Изучить реакт',
        desc: 'Да побыстрее',
        image: "",
        done: true,
        createdAt: date1.toLocaleString(),
        key: date1.getTime()
    },
    {
        titel: 'Написать первое реакт-приложение',
        desc: 'Список запланированных дел',
        image: '',
        done: false,
        createdAt: date2.toLocaleString(),
        key: date2.getTime()
    }
]