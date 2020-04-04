const api = 'https://api.github.com/users?per_pages=5';

const fetchPromise = fetch(api);

const handleError = (response: Response) => {
  if( !response.ok ) {
    throw new Error(response.statusText);
  }
  return response;
}

fetchPromise
  .then(handleError)
  .then((response: Response) => response.json())
  .then(data => console.log('Data:::', data))
  .catch(error => console.warn('Error:::', error))