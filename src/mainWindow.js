const MainWindow = (props) => {
	const bgs = ["bg-VBSFX", "bg-OMG"];
	var g = bgs[Math.round(Math.random())];
	var finalCss = `w-screen h-screen bg-center bg-no-repeat bg-cover ${g}`;
	return (
		<div className={ finalCss } >
			{props.children}
		</div>
	)
}

export default MainWindow;