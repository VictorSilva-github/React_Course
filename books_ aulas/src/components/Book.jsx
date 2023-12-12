import PropTypes from 'prop-types';

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

Book.propTypes = {
  livro: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string,
    image: PropTypes.string
  })
}

export default Book;
