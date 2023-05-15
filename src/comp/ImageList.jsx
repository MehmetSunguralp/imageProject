import ImageItem from './ImageItem';
import './ImageList.css';

function ImageList({ imagesPlaceholder }) {
	return (
		<main className="image-list">
			{imagesPlaceholder.map((img, index) => {
				return <ImageItem key={index} image={img} />;
			})}
		</main>
	);
}

export default ImageList;
