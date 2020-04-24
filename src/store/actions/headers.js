const getHeader = (token, type) => {
  let headers;
  if (token) {
    headers = {
      'Content-Type': type ? type : 'application/json',
      Authorization: `bearer ${token}`,
    };
  } else {
    headers = {
      'Content-Type': type ? type : 'application/json',
    };
  }
  return { ...headers };
};

export default getHeader;
