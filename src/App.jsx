import './App.css';
import SearchHeader from './comp/SearchHeader';
import ImageList from './comp/ImageList';
import searchImages from './comp/Api';
import { useState } from 'react';

function App() {
	const [images, setImages] = useState([]);
	const handleSubmit = async (e) => {
		const result = await searchImages(e);
		setImages(result);
	};

	return (
		<>
			<SearchHeader search={handleSubmit} />
			<ImageList imagesPlaceholder={images} />
		</>
	);
}

export default App;
