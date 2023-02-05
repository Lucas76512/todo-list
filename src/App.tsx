import'./Global.css'
import { Header } from './components/Header'
import { Post } from "./Post"
import { Button } from '../src/components/Button/index'
import { Task } from './components/Task'
export function App() {
  return (
     <div>
      <Header />
      <div className='search-wrapper'>
      </div>
      <Task />
     </div>
  )
}

