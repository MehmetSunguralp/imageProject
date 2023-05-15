import { useState } from 'react';
import './SearchHeader.css';
function SearchHeader({ search }) {
	const [value, setValue] = useState('');
	const handleFormSubmit = (e) => {
		e.preventDefault();
		search(value);
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<header>
			<form className="search" onSubmit={handleFormSubmit}>
				<label>What are you looking for?</label>
				<input type="text" value={value} onChange={handleChange} />
			</form>
		</header>
	);
}

export default SearchHeader;
