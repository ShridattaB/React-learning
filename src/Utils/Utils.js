// const setAccessToken=()=>{ 

// }

// const getAccessToekn=()=>{

// }


export const setToken = (name, value) => {
  document.cookie = name + "=" + value;
};  

export const getToken = (name) => {
  const cookies = document.cookie.split("; ");

  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split("=");

    if (key === name) {
      return value;
    }
  }

  return null; // if cookie not found
};