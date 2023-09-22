import axios from 'axios'
const apiUrl = process.env.URL_BASE_API
const errorMessages = {
  404: 'Error 404: El recurso no se encontró en el servidor.',
  400: 'Error 400: Solicitud incorrecta o mal formada.',
  401: 'Error 401: No estás autorizado para acceder a este recurso.',
  403: 'Error 403: No tienes permiso para acceder a este recurso.',
  500: 'Error 500: Ocurrió un error interno en el servidor.',
  502: 'Error 502: La puerta de enlace o proxy recibió una respuesta no válida.',
  503: 'Error 503: El servidor no está disponible en este momento.',
  429: 'Error 429: Demasiadas solicitudes en un período de tiempo determinado.',
  504: 'Error 504: Tiempo de espera agotado al esperar una respuesta del servidor.',
  406: 'Error 406: No se pudo devolver una respuesta en el formato solicitado.'
}

export const getData = async ({ ruta = '', variables = '' } = {}) => {
  const result = { error: false, errorText: null, errorCode: null, data: null }
  try {
    const parameters = new URLSearchParams(variables).toString()
    const url = `${apiUrl}${ruta}/?${parameters}`
    const response = await axios.get(url)
    result.data = response.data
  } catch (err) {
    result.error = true
    if (err.response) {
      const errorStatus = err.response.status
      result.errorCode = errorStatus
      result.errorText = errorMessages[errorStatus] || 'Error Desconocido'
    } else {
      result.errorText = 'Error al traer los datos'
      result.errorCode = -1
    }
  }
  return result
}
