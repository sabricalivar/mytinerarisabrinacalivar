import '../../src/App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions'
import Cmp404 from './404';
import { Redirect, Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { Card, CardTitle, CardText, Toast, ToastBody, ToastHeader, Spinner, CardImgOverlay, Container, Jumbotron, Button } from 'reactstrap';
import Preloader from '../components/Preloader'



const Cities = (props) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [redirect, setRedirect] = useState(false)


  useEffect(() => {
    window.scrollTo(0, 0)
    async function getAllCities() {
      try {
        await props.getAllCities()
        setLoading(false)
      } catch (err) {
        console.log(err.message)
        setLoading(false)
        setError(true)

        setTimeout(() => {

          setError(false)
          setRedirect(true)
        }, 4000)
      }
    }
    getAllCities()
  }, [])


  /**Selección */

  const inputHandler = (e) => {
    props.selectedCities(e.target.value.trim().toUpperCase())

  }

  /**Armo el objeto a renderizar */

  var citiesRender = props.citiesToRender.map((city) => {
    return (
      <Card inverse cardCities className='cardOneCity'>
        <Link to={`/city/${city._id}`}><div className="gallery-item text-center" key={city._id}>
          <div id="imgCities" style={{ backgroundImage: `url("${city.cover}")` }} ></div>
          <CardImgOverlay className='gallery-img cardCities'>
            <CardTitle tag="h5" className=' gallery-title display-6 cardCitiestext-center link-dark text-decoration-none text-center'>{city.caption} </CardTitle>
            <CardText tag="h5" className=' gallery-title cardCitiestext-center small text-muted fst-italic link-dark text-decoration-none text-center'>{city.quote}</CardText>
            {/* <div className="d-flex container"><button className='ButtonCities'>+</button><p className="text-dark small">Tell me more!</p></div> */}
          </CardImgOverlay>
        </div></Link>
      </Card>

    )
  })

  /**Retorno anticipado preload y error*/

  if (loading) {
    return (
      <>
        <Preloader/>

      </>
    )
  }

  if (error) {
    return <Cmp404 />
  }

  if (redirect) {
    return <Redirect to="./" />
  }


  return (
    <div className="containerCities" style={{ backgroundImage: `url("https://i.postimg.cc/vTYFM1ZQ/background-Gif.gif")` }}>
      <div className="container text-center">
        <input
          className='input'
          type='text'
          placeholder='Filter by city'
          onChange={inputHandler}
        /></div>
      <>
        {citiesRender.length > 0 ? (
          <Container className='gallery-container'>
            {citiesRender}
          </Container>
        ) : (
          <div className="container text-center">
            <Jumbotron>
              <h1 className="display-3">Cant be true!</h1>
              <p className="lead">Your request don´t have results.</p>
              <hr className="my-2 " />
              <p className='fst-italic'>You can have results or excuses, not both.</p>
              <p className="lead">
                <Button color="primary citiesButon">Keep looking</Button>
              </p>
            </Jumbotron>
          </div>
        )}
      </>
    </div>

  )
}


const mapDispatchToProps = {
  getAllCities: citiesActions.getAllCities,
  selectedCities: citiesActions.selectedCities,
}

const mapStateToProps = state => {
  return {
    citiesToRender: state.cities.selectCities,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cities)










