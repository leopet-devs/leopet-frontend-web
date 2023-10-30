export async function getNotificaciones({ apiUrl, token }) {    
    const url = new URL(apiUrl);
    url.pathname = '/notificacion/';    
  
    let response;
    try {
      response = await fetch(url, {
        headers: {
          authorization: 'Bearer ' + token,
        },
      });
    } catch (error) {
      throw new Error('Please check your internet connection and try again');
    }
    if (response.status === 401) {
      window.location.replace('/logout');
    }
    if (response.status >= 400 && response.status < 600) {
      const { error } = await response.json();
      throw error;
    }
    const { result, count } = await response.json();
    return {
        notificaciones: result,
        totalRows: count,
      };
  }

  export async function updateNotificacion(notificacion, { apiUrl, token }) {
    const url = new URL(apiUrl);
    url.pathname = '/notificacion/update/' + notificacion.id;
    let response;
    try {
      response = await fetch(url, {
        method: 'PUT',
        headers: {
          'authorization': 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(notificacion),
      });
    } catch (error) {
      throw new Error('Please check your internet connection and try again');
    }
    if (response.status === 401) {
      window.location.replace('/login');
    }
    if (response.status >= 400 && response.status < 600) {
      const { error } = await response.json();
      throw error;
    }
    const { result } = await response.json();
    return result;
  }