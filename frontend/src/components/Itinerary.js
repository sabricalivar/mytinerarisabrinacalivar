import '../../src/App.css';
import { connect } from 'react-redux';
import activitiesActions from '../redux/actions/activitiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect, useState } from 'react';
import { Collapse, Button, CardBody, Card, Badge } from 'reactstrap';
import Activity from './Activity'
import Swal from 'sweetalert2'


const Itinerary = (props) => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);
  const [activitiesRender, setActivitiesRender] = useState({})
  const [comments, setComments] = useState(props.itinerary.comments);
  const [harts, setHarts] = useState(props.itinerary.likes);
  const [newComment, setNewComment] = useState({
    body: ''
  })


  console.log(props.selectActivities)

  const inputHandler = (e) => {
    setNewComment({
      ...newComment,
      body: e.target.value,
    })
  }

  const formPostComment = async (e) => {
    if (!props.token) {
      Toast.fire({
        icon: 'info',
        title: 'Sorry, you must to be logged for this'
      })
    } else {
      try {
        let response = await props.putCommentsByItineraryId(props.itinerary._id, newComment, props.token)
        if (response.success) {
          setComments(response.response)
          Toast.fire({
            icon: 'success',
            title: 'Thank´s for your comment!'
          })
        } else {
          Toast.fire({
            icon: 'info',
            title: 'Oh! we have troubles to published your comment, try again please'
          })
        }
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'info',
          title: error.message
        })
      }
    }
  }

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  // swalWithBootstrapButtons.fire({
  //       title: 'Are you sure?',
  //       text: "You won't be able to revert this!",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonText: 'Yes, delete it!',
  //       cancelButtonText: 'No, cancel!',
  //       reverseButtons: true
  //     }).then((result) => {



  const deleteComment = async (e) => {
    console.log(e.target)
    if (!props.token) {
      Toast.fire({
        icon: 'info',
        title: 'Sorry, you must to be logged for this'
      })
    } else {
      // if (result.isConfirmed) {
      try {
        let response = await props.putDeleteCommentsByItineraryId(props.itinerary._id, props.token)
        console.log(response)
        if (response.success) {
          console.log(response.response)
          // setComments(response.response)
          // swalWithBootstrapButtons.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // )
        } else {
          Toast.fire({
            icon: 'info',
            title: 'Oh! we have troubles to published your comment, try again please'
          })

        }

      } catch (error) {
        Toast.fire({
          icon: 'info',
          title: error.message
        })
      }
      // } else if (result.dismiss === Swal.DismissReason.cancel) {
      //   // swalWithBootstrapButtons.fire(
      //   //   'Cancelled',
      //   //   'Your imaginary file is safe :)',
      //   //   'error'
      //   // )

      // }

    }
  }

  useEffect(() => {
    if (collapse) {
      async function getActivitiesByItineraryId() {
        try {
          let response = await props.getActivitiesByItineraryId(props.itinerary._id)
          setActivitiesRender(response.response[0])
        } catch (err) {
          console.log(err.message)
        }
      }
      getActivitiesByItineraryId()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapse])



  const likeFunction = () => {
    if (!props.token) {
      Toast.fire({
        icon: 'info',
        title: 'Sorry, you must to be logged for this'
      })
    } else {
      props.putLikesItinerary(props.itinerary._id, props.token) ///falta tener el id disponible cuando envian el token
        .then(res => {
          if (res.success) {
            setHarts(res.response)
          } else {
            console.log(res.response)
          }
        })
    }
  }



  let price = props.itinerary.price

  let title = props.itinerary.pictures.map((picture) => {
    return (
      <div className='col-lg-12 px-4 backgroundItineraries border-0' style={{ backgroundImage: `url("${picture}")` }} alt='picture of Montmartre' key={props.itinerary._id}></div>
    )
  })

  let coins = Array(price)
    .fill(price)
    .map((price, index) => {
      return (
        <img src='https://i.postimg.cc/fRHbBdt9/coin-unscreen.gif' alt='coin' className='coin bg-transparent img-fluid img-thumbnail border-0' key={index} />
      )
    })


  let likes =(harts.includes(props.userId)) ? (
    <>
      <div className='link-light d-flex' onClick={likeFunction}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg><Badge >{harts.length}</Badge></div>

    </>
  ):(
    <>
      <div className='link-light d-flex' onClick={likeFunction}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg><Badge >{harts.length}</Badge></div>
    </>
  )





  let mapComments = comments.map(comment => {
    return (
      <> <div className='#Comments overflow overflow-auto'>
        <smal className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-md-3 d-none d-md-block  text-white' key={comment.commentId}><div className='d-flex'>{comment.body}
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg></div>
          <svg onClick={deleteComment} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </smal></div>
      </>
    )
  })

  let hashtags = props.itinerary.hashtags.map((hash, index) => {
    return (
      <smal><span className='p-1 rounded-pill border border-1 budge bg-danger bg-gradient me-md-3 d-none d-md-block text-white' key={index}>{hash}
      </span></smal>

    )
  })

  return (
    <>
      <div className='divItinerary'>
        <div className=''>{title}
          <div className='row d-flex'>
            <div className='col-lg-8'>
              <div className='content1 m-5'>
                <p className='mb-4 fs-6 text-white'>{props.itinerary.description}</p>
                <div className="order-4 container d-flex hashtags">{hashtags}</div>
                <div className='row'>
                  <h2 className='text-white  display-6 mt-5'>What is the proposal:</h2>
                  <div className='col-lg-3'>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='content mx-auto'>
                <img id="imgItineraries" className='' alt={props.itinerary.alt} style={{ backgroundImage: `url("${props.itinerary.pictureAuthor}")` }} />
                <p className="nameAuthor display-6 text-center text-white me-5">{props.itinerary.author}</p>
                <div className='d-flex justify-content-between me-5 align-middle'><div className=''>{coins}</div><div className=' '>{likes}</div></div>
              </div>
            </div>
            <div>
              <Collapse
                isOpen={collapse}
              >
                <Card className="bg-transparent text-white">
                  <CardBody className="row d-flex bg-transparent text-white link-light text-decoration-none textActivities">
                    <div className='col-lg-6'>
                      <div className='content mx-auto'>
                        <div><Activity activities={activitiesRender} /></div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='content1 m-5'>
                        <div>{mapComments}</div>
                        <smal><span className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-md-3 d-none d-md-block  text-white'>
                          <input
                            className='input'
                            type='textarea'
                            name='body'
                            placeholder='comment'
                            value={newComment.body}
                            onChange={inputHandler}
                          />

                          <div className='joiErrors'>{ }</div>
                          <button className=' text-white bg-transparent text-center p-1 border border-1 budge rounded-3  mb-2 bg-transparent me-md-3 d-none d-md-block  text-whitep-2  mt-1'><smal><span className='' onClick={formPostComment}>Post</span></smal></button>

                        </span></smal>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Collapse>
              <div class="d-grid gap-2 mx-auto col-6 mx-auto text-center d-flex justify-content-center">
                <Button onClick={props.getActivitiesByItineraryId} color="p-1 rounded-pill border border-1 budge text-decoration none bg-danger bg-gradient me-md-3 d-none d-md-block text-white text-center small fw-bold mb-4" onClick={toggle} style={{ marginBottom: '5rem' }}>Show more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const mapStateToProps = state => {
  return {
    selectItinerary: state.itineraries.selectItinerary,
    selectActivities: state.activities.selectActivities,
    token: state.users.token,
    img: state.users.img,
    firstname: state.users.firstname,
    userId: state.users.userId
  }
}

const mapDispatchToProps = {
  getActivitiesByItineraryId: activitiesActions.getActivitiesByItineraryId,
  putLikesItinerary: itinerariesActions.putLikesItinerary,
  putCommentsByItineraryId: itinerariesActions.putCommentsByItineraryId,
  putDeleteCommentsByItineraryId: itinerariesActions.putDeleteCommentsByItineraryId
}



export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
