import axios from 'axios'

export const exerciseOptions = {
  method: 'GET',
   /* url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',  */
  headers: {
    'X-RapidAPI-Key': 'd77356fa4dmsh7104a0b51be08bbp1083a2jsn4eb50ff98ff9',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  /* url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about', */
  headers: {
    'X-RapidAPI-Key': 'd77356fa4dmsh7104a0b51be08bbp1083a2jsn4eb50ff98ff9',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

/* axios.request(exerciseOptions).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
 */
export const fetchData = async (url, options ) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;

}