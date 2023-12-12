import PropTypes from 'prop-types';

function Book2({ data }) {
  return (
    <div className="row">
      {data.map((e, i) => (
        <div key={i} className='col-12 col-lg-4'>
          <hr></hr>
          <h2>{e.title}</h2>
          <h4>{e.year}</h4>
          <h4>{e.genre}</h4>
          <img src={e.image} alt="" />
        </div>
      ))}
    </div>
  )
}

Book2.propTypes = {
  data: PropTypes.arrayOf({
    title: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string,
    image: PropTypes.string
  })
}



export default Book2;
