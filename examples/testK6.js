import http from 'k6/http'
import {check} from 'k6'

export default function () {
    let url = 'https://httpbin.test.k6.io/post';
    let response = http.post(url, 'hola mundo en k6');
    check(response, {
        "Respuesta esperada" :((r) => r.body.includes("hola mundo en k6")),
        "Status 200" : ((r) => r.status === 200 )
    })
}