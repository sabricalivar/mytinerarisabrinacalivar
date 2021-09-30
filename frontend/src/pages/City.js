import '../../src/App.css';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import { Redirect, NavLink, Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Spinner, Button, Toast, ToastBody, ToastHeader } from 'reactstrap';
import Itinerary from '../components/Itinerary';
import Preloader from '../components/Preloader';





const City = (props) => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [redirect, setRedirect] = useState(false)


  useEffect(() => {
    window.scrollTo(0, 0)

    async function getOneCity() {
      try {
        await props.getOneCity(props.match.params.id)
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
    getOneCity()

    async function getItinerariesByCity() {
      try {
        await props.getItinerariesByCity(props.match.params.id)
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

    getItinerariesByCity()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const { selectItinerary } = props

  /**Retorno anticipado preload y error*/

  if (loading) {
    return (
      <>
        <Preloader />
      </>
    )
  }

  if (error) {
    return (
      <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader icon={<Spinner size="sm" />}>
            Oh! we can´t to thats!
          </ToastHeader>
          <ToastBody>
            But don´t worry, for now you go to page of Citys! we stay working en thats trouble:(
          </ToastBody>
        </Toast>
      </div>
    )
  }

  if (redirect) {
    return <Redirect to="./" />
  }
  const { citySelected } = props

  return (
    <div className="containerCity" style={{ backgroundImage: `url("${citySelected.pictures1}")` }}>
      <div className='text-center lead text-muted fst-italic d-block mb-3'>{citySelected.quote}</div>

      <div className="">
        {citySelected ? (
          <div className={citySelected.className} cardCities >
            <div className='row'>
              <div className='col-lg-8'>
                <div className='content ms-4'>
                  <h1 className='text-white  display-5'>Welcome to</h1>
                  <div tag="h5" className='text-white display-1 fw-bold mb-4'><span className='link-warning text-decoration.none'>{citySelected.caption}</span></div>
                  <h6 className='text-white  text-muted fst-italic  display-6 mb-4'>{citySelected.country}</h6>
                  <div className="mb-4 fs-6 text-white ">{citySelected.description}</div>
                  <div className=''>
                    <div className='d-flex me-4'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className='me-1 text-white  bi bi-wifi' fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
                        <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                      </svg>
                      <div>
                        <div className='text-center lead text-muted d-block me-3 mb-2'>{citySelected.connection}</div>
                      </div>
                    </div>
                    <div className='d-flex '>
                      <div className='d-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className='me-1 bi bi-cash-coin text-white ' viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                          <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                          <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                          <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                        </svg>
                        <div>
                          <div className='text-center lead text-muted d-block me-3 mb-2'>{citySelected.currency}</div>
                        </div>
                      </div>
                      <div className='d-flex me-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className=' me-1 bi bi-currency-bitcoin text-white ' viewBox="0 0 16 16">
                          <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z" />
                        </svg>
                        <div>
                          <div className='text-center lead text-muted d-block me-3 mb-2'>{citySelected.cryptocurrencies}</div>
                        </div>
                      </div>
                    </div>
                    <div className='d-flex me-3'>
                      <div className='d-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className='me-1 text-white  bi bi-plug-fill' viewBox="0 0 16 16">
                          <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0z" />
                        </svg>
                        <div>
                          <div className='text-center lead text-muted d-block me-3 mb-2'>{citySelected.voltage}</div>
                        </div>
                      </div>
                      <div className='d-flex me-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className='me-1 bi bi-outlet text-white ' viewBox="0 0 16 16">
                          <path d="M3.34 2.994c.275-.338.68-.494 1.074-.494h7.172c.393 0 .798.156 1.074.494.578.708 1.84 2.534 1.84 5.006 0 2.472-1.262 4.297-1.84 5.006-.276.338-.68.494-1.074.494H4.414c-.394 0-.799-.156-1.074-.494C2.762 12.297 1.5 10.472 1.5 8c0-2.472 1.262-4.297 1.84-5.006zm1.074.506a.376.376 0 0 0-.299.126C3.599 4.259 2.5 5.863 2.5 8c0 2.137 1.099 3.74 1.615 4.374.06.073.163.126.3.126h7.17c.137 0 .24-.053.3-.126.516-.633 1.615-2.237 1.615-4.374 0-2.137-1.099-3.74-1.615-4.374a.376.376 0 0 0-.3-.126h-7.17z" />
                          <path d="M6 5.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zM7 10v1h2v-1a1 1 0 0 0-2 0z" />
                        </svg>
                        <div>
                          <div className='text-center lead text-muted d-block mb-2'>{citySelected.plugs}</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className='divCity col-lg-4'>
                <div className='content mx-auto'>
                  <img id="imgCity" style={{ backgroundImage: `url("${citySelected.pictures2}")` }} alt={citySelected.altText}></img>
                  <img id="imgCity" style={{ backgroundImage: `url("${citySelected.pictures3}")` }} alt={citySelected.altText}></img>
                </div>
              </div>
            </div>
            <div>
              {selectItinerary.length == 0 ? (
                <div className=" container text-center MyMistake d-flex text-center align-content-center col-lg-6 px-4 my-2 mb-0 d-flex flex-column align-self-center">
                  <div>
                    <div id="Crash" className='' style={{ backgroundImage: `url("https://i.postimg.cc/L86v5TXw/crash.png")` }}></div>
                    <p className="lead  text-white">Sorry...</p>
                    <div class=" ">
                      <div><NavLink to="/cities"><Button color="cityButon p-2 border border-1 budge rounded-3 mb-2 bg-warning bg-gradient text-decoration-none text-white">Back to cities</Button></NavLink></div>
                    </div>
                  </div>
                </div>
              ) : (
                selectItinerary.map(itinerary => <Itinerary itinerary={itinerary} />
                )
              )}
            </div>
          </div>
        ) : (
          <div className="container text-center MyMistake">
            <Jumbotron>
            <div id="Crash" className='' style={{ backgroundImage: `url("https://i.postimg.cc/3N5YrzJX/error.gif")` }}></div>
              <hr className="my-2 " />
              <p className="lead"></p>
              <div class="">
                <NavLink to="/cities"><Button color="cityButon" className='cityButon p-2 border border-1 budge rounded-3 mb-2 bg-danger bg-gradient text-decoration-none text-white'>Back to cities</Button></NavLink>
              </div>
            </Jumbotron>
          </div>
        )}
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    citySelected: state.cities.citySelected,
    selectItinerary: state.itineraries.selectItinerary,

  }
}

const mapDispatchToProps = {
  getOneCity: citiesActions.getOneCity,
  getItinerariesByCity: itinerariesActions.getItinerariesByCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(City)




