const MainWindow = () => {
	const bgs = ["bg-VBSFX", "bg-OMG"];
	var g = bgs[Math.round(Math.random())];
	var finalCss = `w-screen h-screen bg-center bg-no-repeat bg-cover ${g}`;
	return (
		<div className={ finalCss } >
			<div className='m-8 bg-white rounded-lg'>
			</div>
		</div>
	)
}

export default MainWindow;