import './App.css'
import axios from 'axios'

function App() {
  axios.get("http://localhost:4000/api/tasks")
  .then(res => console.log(res.data))
  .catch(err => console.log(err))

  return (
    <div>
      This is frontend
    </div>
    
  )
}

export default App
