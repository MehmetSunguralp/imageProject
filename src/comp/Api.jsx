import axios from 'axios';

const searchImages = async (e) => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization: 'Client-ID RovfbmxoAdCW4cgPfAoJfZ2ASSOrU_IFB7UBde67ry8',
		},
		params: {
			query: e,
		},
	});

	return response.data.results;
};

export default searchImages;
