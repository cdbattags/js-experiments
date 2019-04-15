import 'dotenv/config'
import f from './default-function-export'
import c from './default-class-export'
import c1 from './default-class-init-export'
import c2 from './default-class-init-export'

const cInstance = new c()

const printState = () => {
  console.log(`c: ${cInstance.hello()}`)
  console.log(`c1: ${c1.hello()}`)
  console.log(`c2: ${c2.hello()}`)
}

// console.log(f('testing'))
// console.log(new c().hello())

printState()

c1.var = 'hello, first change'

printState()

c2.var = 'hello, second change'

printState()


