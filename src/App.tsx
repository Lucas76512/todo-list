import'./Global.css'
import { Header } from './components/Header'
import { Post } from "./Post"
import { Button } from '../src/components/Button/index'

import { Input} from './components/Input/index'
import { Tasks } from './components/Tasks'


export function App() {
  return (
     <div>
      <Header />
      <div className='search-wrapper'>
      </div>
      <Tasks />
     </div>
  )
}

