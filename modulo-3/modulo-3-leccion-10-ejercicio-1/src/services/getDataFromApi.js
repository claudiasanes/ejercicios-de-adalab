const getDataFromApi = () => {
  // es importante en react de acordarse del return del fetch
  return fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json())
    .then((data) => {
      // el data que nos devuleve lo recorremos y obtenemos los datos que nos interesan lo cada usuario
      return data.results.map((user) => {
        return {
          id: user.login.uuid,
          username: user.login.username,
          city: user.location.city,
          country: user.location.country,
          name: user.name.first + ' ' + user.name.last,
          email: user.email,
          gender: user.gender,
          image: user.picture.large,
        };
      });
    });
};

export default getDataFromApi;
