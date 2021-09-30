import axios from 'axios'

const itinerariesActions = {
    getAllItineraries: () => {

        return async (dispatch, getState) => {
            let response = await axios.get('https://mytinerarysabrinacalivar.herokuapp.com/api/itineraries')
            let data = response.data.response
            if (!response.data.success) {
                throw new Error('Backend-BD')
            }

            dispatch({ type: 'GET_ALL_ITINERARIES', payload: data })
        }
    },

    getItinerariesByCity: (cityId) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.get(`https://mytinerarysabrinacalivar.herokuapp.com/api/itineraries/${cityId}`)

                if (response.data.success) {
                    let data = response.data.response
                    dispatch({ type: 'GET_ITINERARIES_BY_CITY', payload: data })
                    return ({ sucess: true, response: response.data.response })
                } else {
                    throw new Error('Backend-BD')

                }

            } catch (err) {
                return { success: false, response: err.message }
            }
        }
    },

    putLikesItinerary: (itineraryId, token) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.put(`https://mytinerarysabrinacalivar.herokuapp.com/api/itineraries/likes/${itineraryId}`, {},
                    {
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    })
                if (response.data.success) {
                    return ({ success: true, response: response.data.response })
                } else {
                    return ({ success: false })
                }
            } catch (err) {
                return { success: false, response: err.message }
            }
        }
    },

    putCommentsByItineraryId: (itineraryId, newComment, token) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.put(`https://mytinerarysabrinacalivar.herokuapp.com/api/itineraries/comments/${itineraryId}`, { ...newComment },
                    {
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    })
                if (response.data.success) {
                    return ({ success: true, response: response.data.response })
                } else {
                    return ({ success: false, response: response.data.response })
                }
            } catch (err) {
                return { success: false, response: err.message }
            }
        }
    },

    putDeleteCommentsByItineraryId: (itineraryId, commentId, token) => {
        return async (dispatch, getState) => {
            console.log('toy en el delete')
            console.log(commentId)
            try {
                let response = await axios.put(`https://mytinerarysabrinacalivar.herokuapp.com/api/itineraries/deleteComments/${itineraryId}`, { commentId },
                    {
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    })
                if (response.data.success) {
                    return ({ success: true, response: response.data.response })
                } else {
                    return ({ success: false, response: response.data.response })
                }
            } catch (err) {
                return { success: false, response: err.message }
            }
        }
    },


}

export default itinerariesActions