import axios from 'axios'

const api = axios.create({
  // se não estiver utilizando um emulador, deverá colocar o endereço da máquina que tá o backend
  // senao, utiliza localhost
  baseURL: 'http://192.168.0.102:3333'
})

export default api