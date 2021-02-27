// @ts-ignore
import axios from "axios";

let url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((response: { data: Todo; }) => {
    let data = response.data as Todo;
    log(data.id, data.title, data.completed);
});

const log = (id: number, title: string, completed: boolean) => {
    console.log(id, title, completed);
}



