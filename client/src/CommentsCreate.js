import React, { useState } from 'react';
import axios from 'axios';

const CommentsCreate = ({ postId }) => {
	const [content, setContent] = useState('');

	const onSubmit = async (event) => {
		event.preventDefault();

		await axios.post(`http://posts.com/posts/${postId}/comments`, {
			content,
		});

		setContent('');
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>New Comment</label>
					<input
						value={content}
						onChange={(e) => setContent(e.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<button className="btn btn-sm btn-primary mt-1">Submit</button>
			</form>
		</div>
	);
};

export default CommentsCreate;
