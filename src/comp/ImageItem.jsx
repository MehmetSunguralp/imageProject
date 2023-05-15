import './ImageItem.css';
import likeIco from '../img/like.png';

function ImageItem({ image }) {
	console.log(image);
	return (
		<figure className="image-figure">
			<a target="_action" href={image.urls.full}>
				<img
					className="result-image"
					src={image.urls.small}
					alt={image.alt_description}
				/>
			</a>
			<div className="like-section">
                <span>{image.likes}</span>
				<img src={likeIco} alt="" />
			</div>
		</figure>
	);
}

export default ImageItem;
