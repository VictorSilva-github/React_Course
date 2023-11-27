
function Book({ livro }) {
    return (
        <div>
            <h5>{livro.title}</h5>
            <h5>
                {livro.author}
            </h5>
            <h5>
                {livro.year}
            </h5>
            <h5>
                {livro.genre}
            </h5>
            <img src={livro.image} alt=""/>
            
        </div>
    )
}

export default Book;