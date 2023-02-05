import './Task.css'
import trash from "../../assets/trash.svg"

export function Task() {
    return(
        <div className='list'>
        <div className='textbox'>
        <p className='text'>Ola</p> 
        <div className='trash'>    
          <img className='layer' src={trash} alt="lixeira" />
        </div>
        </div>
        </div>
    )
}