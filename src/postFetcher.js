const PostRenderer = () => {
	var posts = [];
	for(var i = 0; i < 2; i++) {
		posts.push(<Post />)
	}
	return (
	<div>
		{ posts }
	</div>)
};

const Post = (title, content, author, created_at) => {
	return (
		<div className="post">
			<div className='h-1 font-bold'>{ title }</div>
			<p>{ content }</p>
			<p>Posted by { author } the { created_at }</p>
		</div>
	)
};

export default PostRenderer;