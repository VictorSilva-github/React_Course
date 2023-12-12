import Header from "./components/Header"
import Book from "./components/Book"
import "./App.css"
import { book1, book2, book3, book4, data } from "./data"
import Book2 from "./components/Book2"


function App() {
  return (
    <div>
      <Header />
      <p>React 01</p>
      <Book livro={book1} />
      <Book livro={book2} />
      <Book livro={book3} />
      <Book livro={book4} />
      <div className="container">
          <Book2 data={data} />
      </div>

    </div>

  )
}

export default App
