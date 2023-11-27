import Header from "./components/header"
import Book from "./components/Book"
import "./App.css"
import { book1, book2, book3 } from "./data"

function App(){
  return (
    <div>
      <Header/>
      <p>React</p>
      <Book livro={book1}/>
      <Book livro={book2}/>
      <Book livro={book3}/>
    </div>

  )
}

export default App