import http from 'k6/http'
import {check, sleep} from 'k6'

export let options = {
    vus: 10,
    duration: '5m',
    iterations: 40
}
export default function () {
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    sleep(1)
}