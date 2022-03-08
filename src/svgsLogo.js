var GenIcon = require('react-icons/lib').GenIcon;

/**
 * @deprecated
 */
const SylveonIcon = ({size}) => {
	return (
		<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1000 1000"
		xmlSpace="preserve"
		width={ size }
		height={ size }
		>
			<path d="M166.3 936.8c-18.3-1.9-33.3-2.5-47.4-5.4-6.8-1.4-11.9-7-17.8-10.7 5.2-3.3 9.7-7.7 15.6-9.8 12.5-4.4 25.7-7.6 36.3-10.7-8.3-6.9-17.6-13.7-25.2-21.5-3.4-3.5-5.9-9.9-3.7-13.3 1.7-2.6 11.2-3.5 17.3-3.5 19.1-.2 38.1.6 57.2.4 10.1-.1 17.1-3.9 19.8-11.8 2.9-8.4 7.8-16.4 10.8-24.7 3.5-9.9-3.7-15.3-17.3-17.8-28.4-5.2-57.5-9.8-84.4-18-55.2-17-71.9-61.6-59.5-96.6 10.1-28.4 32.6-51.8 58.2-74.1-19.1-24.9-25-50.8-11.3-78.2 1-1.9-.7-4.6-1.7-6.9-.4-.9-2.1-1.6-3.4-2.3-34.5-18.2-41.3-42.5-30.8-71.1 8.3-22.5 16-45.1 24.1-67.9-8.7-3.3-18.7-7.2-28.7-11 .1-1.3.2-2.7.4-4 9-2.8 18.1-5.7 26.4-8.3-9.7-9.9-19.8-19.6-28.8-29.9-2.7-3.1-2-7.7-2.9-11.7 5.9-.4 12.2-1.9 17.7-.9 10.8 2 21 5.3 31.5 8.1.7-.8 1.4-1.7 2.1-2.5-5.3-2.4-10.5-5.1-16.1-7.2-20.6-7.7-43.6-12.9-61.4-23.1-30.8-17.6-39.4-42-29.1-69.9 11-29.9 35.8-54 59-79 5.2-5.6 7.5-12.8 10.6-19.4 6.6-14.1 11.7-28.8 19.8-42.4 5.2-8.7 9.2-8.2 17.1-3 14.5-19.2 29.3-38.9 44.1-58.5 1.2-1.6 3.1-3 4.8-4.5 21-18.5 39-16.8 51.9 4.9 3.5 5.8 6.3 11.9 9.3 17.5 17.6-5.2 34.4-11.1 52-15 7.9-1.7 17.5.7 26.3 1.2-1.2 6-.4 12.9-4.1 17.9-9.7 13.2-21.5 25.5-32.2 38.1 14.5-1.8 30.1-5 45.7-5.4 13.5-.3 28.1.9 40.6 4.4 16.5 4.7 18 13.2 4.4 21.5-13.3 8.2-28.1 15.3-43.2 21.8-15.5 6.7-32 12.3-48.3 18-8.3 2.9-12.6 6-11.2 13.7 7.9 40.9-.3 81.1-10.5 121.2-.7 2.7 2 6.9 5 8.9 6 4 13.3 7 19.9 10.3 9.2-12.1 17.2-24.8 28-36.1 23.1-24 40.3-23.4 60.8 1.7 7.6 9.3 13.2 19.5 20.1 29.9 13.8-14.8 26.8-29.7 41-43.9 47.1-47.1 110.3-79.1 183.5-100.7 24.1-7.1 50.2-11.5 75.9-14.5 19.6-2.2 26.6 5 22.7 19.2-7.4 27.2-28 50-48 72.9-4.2 4.8-8 8.5-5.4 16 2.3 6.7-3.5 16.2-9.4 22.7-11.6 12.8-24.9 25-39.3 36.2-14.1 10.9-30.5 20.2-46.5 30.6 20.7 5.3 17.1 17.7 13.1 29.9-8.8 26.8-34.6 44.6-64.5 62.7 28.3.9 54-1.7 75.5-11.9 35.8-17 71.3-34.9 103.9-55 52.9-32.8 105-66.3 169.7-86.3 28.9-8.9 59-15.8 89.1-22.3 14.4-3.1 19.7 2 13.8 12.3-4.5 7.7-11.7 14.6-17.9 22.1 10.5.7 21.4.6 31.7 2.5 6.2 1.1 11.3 5.3 16.9 8.1-4.5 3.4-8.2 7.9-13.7 9.9-24 8.7-50 15-72.6 25.3-32.3 14.7-62.2 32.2-93.1 48.4 45.3 60.9 36.3 119.9-4.1 179.3 15.2 3.5 8.8 9.2 2.6 15-23.4 21.9-54.5 35.4-90.3 43.6-5.4 1.2-10.8 2.4-18 3.9 5.1 17.7 12 35.1 14.7 52.8 2.8 18.5 1.4 37.4 2.1 56.1.1 3.6 1 7.3 2.3 10.8 6.4 16.7 13 33.3 19.7 49.9 7.9 19.5 2.6 37.8-7.1 56.2-16.4 30.9-31.9 62.1-47.2 93.3-8.9 18.1-42.9 29.4-67.1 21.6-15.2-4.9-18.4-14.1-8-23.7 2.9-2.6 5.9-5.7 9.8-7.1 20.4-7.7 28.5-21.5 33.4-36.3 6.8-20.5 12.3-41.2 17.8-61.8 2.6-9.8-2.4-18-13.7-23.6-15.7-7.8-31.6-15.2-47.5-22.7-1.1.6-2.1 1.2-3.2 1.8 3.2 9.6 6 19.3 9.7 28.9 4 10.2 3.8 19.8-1.8 29.7C600 878.6 586 904.9 571 931c-9.5 16.4-28.5 23.6-51.7 24.1-6.3.1-16.2-3.6-18.3-7.4-2.1-3.8 1.4-11.4 5.9-14.6 32.9-23.6 41.5-54.9 51.1-85.6 1.7-5.4-6.8-13.7-13-19.1-18.9-16.5-39-32.2-58.5-48.3-2.7-2.2-4.7-4.9-6.9-7.5-14.5-17.3-14.8-18.4-42-14.1-23.1 3.6-45.9 9-67.7 15.7-8.5 2.6-13.2 11.2-20.8 16.2-10.2 6.7-4.9 13.4-2.5 20.6 6.1 18.4.5 35.8-7.9 53.1-3.5 7.2-4.6 15.2-6.3 22.8-3.7 16.7-5.6 33.7-10.9 50.2-5.5 17.3-31.3 29.6-52.4 27-18.6-2.3-22.6-9.2-12-20.5 5.8-6.2 11.4-12.4 15.2-19.7-22.1 4.8-43.6 7.9-51.8 27.1-8 18.7-24.7 33.3-54.5 35.4-7 .5-15.2 1.1-21-1-7.6-2.8-17.6-7.6-18.9-12.7-1.3-4.9 5.9-11.9 11.5-16.6 8-6.7 17.8-12.1 28.7-19.3zm229.3-497.5c0 19.1-1.1 34.9.2 50.6 3.1 35.6-21.1 57-64.3 70.1-26 7.9-25.7 9.3-9.7 26.5 3.1 3.4 7.3 6.3 11 9.4 5.5 4.6 11 4.5 17.4.7 10.7-6.5 21.6-12.9 32.6-19.2 33.2-19.1 65.5-39.3 100.2-56.9 30.3-15.4 64.2-17 98.9-5.8 32.7 10.6 58.3 26.9 78.1 48.4 3.3 3.6 6.6 7.2 10 10.8 70.4-42.1 120.1-122.9 100.9-163-5.3 3.2-10.2 6.5-15.5 9.5-36.6 20.4-74 39.9-118.4 50.6-61.9 14.9-122.2 12-180.6-9.5-20-7.2-39.9-14.5-60.8-22.2zm200.6 167.4c-13.9-23.7-31.9-39.4-62.6-44.6-6.5-1.1-16.3.2-21.3 3.3-20.1 12.2-38.9 25.6-58.1 38.5 1.3 1.4 2.6 2.8 3.9 4.1 44.5-6.5 89.1-12.5 138.1-1.3zm-439.5 37.2c-1.1 1.2-4.1 3.4-5.1 6-6.4 17.4-14.3 34.6-18 52.3-4.7 22.8 13.8 39.9 43 45.6-6.5-34-13.2-69-19.9-103.9z" />
		</svg>
	);
}

/**
 * @deprecated
 */
const GunIcon = ({size, color}) => {
	return (
	<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 644 441"
    width={size}
	height={size}>
    	<path fill={color} d="M29.5 3.4c-3.7 1.6-8.3 6.8-9.1 10.2-.5 1.8-1.3 2.4-3.3 2.4-4.7 0-10.9 4.9-13.9 11C1 31.5.5 34.1.2 42.5c-.3 5.5.1 13.7.8 18.2L2.2 69h3.4c4 0 4.3 1.5 1.9 9.4-1.8 5.8-1.9 14.7-.4 19.6.6 1.9 1.5 8.9 1.8 15.5.8 13.1 1.7 15.6 6.7 18 3.9 1.9 31 4.5 46.1 4.5H73v-2.5c0-1.9.5-2.5 2.3-2.5 4 0 9.7 2.1 10.6 3.9 1.1 1.9-3.3 1.7 88.1 4.1 35.3.9 39.8 1.5 46.2 6.8 4.9 4 6.7 6.2 8.7 10.7 4.2 9.3 3.5 18.7-3.3 41.7-4.4 14.9-5.1 19.7-3.6 24.3 2 6.2 6.9 7.7 28.5 8.6 9.9.4 26.2 1.5 36.3 2.4 20.8 1.7 48.7 2 57.8.5 3.4-.6 11-2.8 17-5.1 21.5-8.1 28.3-6.3 37.7 10.1 5 8.7 7.6 18.7 8.3 32.1.8 14.6 2 18 8.2 22.3 13.3 9.2 14.1 11 15.7 32.7 1.5 19.9 2.3 22 10.7 28 3.4 2.5 6.8 6 7.8 8 2.4 4.6 5.6 17.6 6.5 25.9 1.5 14.3 3.2 19.2 9 26.1 3 3.5 5.5 7.1 5.6 7.9.1.8.2 4.1.3 7.4.1 5.2.4 6.1 2.9 8 2.6 1.9 4.2 2.1 19.5 2.2 9.2.1 36.9.5 61.5.8 51.1.8 48.8 1.1 50.5-7.1.5-2.6.7-6.7.5-9l-.5-4.3h3.8c13.8-.1 30.5-10.5 33.4-20.9 2.6-9.5.6-22.5-7.4-46.5-8.6-25.5-13.9-36-41.1-80.1-30.3-49.2-39.6-71.3-42.6-101-1.9-18.5 1.8-31.9 11.7-42.5 6.4-6.9 11.3-9.4 23.3-12.1 17.8-3.9 20.1-7.6 14-21.9l-3.1-7.4.3-33.3.4-33.3-2.8-2.7c-2.6-2.7-3.2-2.8-14-3.1l-11.3-.4-1.7-4.9c-2.2-6.2-5-8.1-11.3-7.7-4.3.3-5.1.7-6.9 3.6-1.1 1.9-3.2 4.8-4.7 6.5l-2.6 3.2-249.1.3L45 16v-2c0-2.6-2.2-7-4.7-9.2-2.7-2.5-7.2-3-10.8-1.4zm281.2 142.5c7 .4 12.8 1.2 13.4 1.8 1.5 1.5-.4 24.6-2.4 29.5-.8 1.9-4 6.3-7.2 9.9-7.7 8.6-9.2 11.7-7.7 16.7.6 2.1 2 4.7 3.1 5.9l2 2.1-17.7-.4c-25.3-.6-28.4-.9-32.9-3.3-8-4.1-11.8-14.6-11.1-31 .8-16.6 5.3-26.1 14-29.6 9-3.6 10.7-3.7 46.5-1.6zm61.5 28.2c3.5 16.7-6.3 33.8-22.2 38.6-5.7 1.8-23.7 2.3-29.4.9-2.8-.7-2.7-.8 3.4-3.7 9.1-4.3 26.4-21.8 28.2-28.5 1.2-4.4 1.6-4.7 8.4-8 4-1.9 7.5-4.1 7.8-5.1 1-2.6 2.5-.3 3.8 5.8z" />
  	</svg>
	);
};

function SylveonIconGen(props) {
	return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1000 1000"},"child":[{"tag":"path","attr":{"d":"M166.3 936.8c-18.3-1.9-33.3-2.5-47.4-5.4-6.8-1.4-11.9-7-17.8-10.7 5.2-3.3 9.7-7.7 15.6-9.8 12.5-4.4 25.7-7.6 36.3-10.7-8.3-6.9-17.6-13.7-25.2-21.5-3.4-3.5-5.9-9.9-3.7-13.3 1.7-2.6 11.2-3.5 17.3-3.5 19.1-.2 38.1.6 57.2.4 10.1-.1 17.1-3.9 19.8-11.8 2.9-8.4 7.8-16.4 10.8-24.7 3.5-9.9-3.7-15.3-17.3-17.8-28.4-5.2-57.5-9.8-84.4-18-55.2-17-71.9-61.6-59.5-96.6 10.1-28.4 32.6-51.8 58.2-74.1-19.1-24.9-25-50.8-11.3-78.2 1-1.9-.7-4.6-1.7-6.9-.4-.9-2.1-1.6-3.4-2.3-34.5-18.2-41.3-42.5-30.8-71.1 8.3-22.5 16-45.1 24.1-67.9-8.7-3.3-18.7-7.2-28.7-11 .1-1.3.2-2.7.4-4 9-2.8 18.1-5.7 26.4-8.3-9.7-9.9-19.8-19.6-28.8-29.9-2.7-3.1-2-7.7-2.9-11.7 5.9-.4 12.2-1.9 17.7-.9 10.8 2 21 5.3 31.5 8.1.7-.8 1.4-1.7 2.1-2.5-5.3-2.4-10.5-5.1-16.1-7.2-20.6-7.7-43.6-12.9-61.4-23.1-30.8-17.6-39.4-42-29.1-69.9 11-29.9 35.8-54 59-79 5.2-5.6 7.5-12.8 10.6-19.4 6.6-14.1 11.7-28.8 19.8-42.4 5.2-8.7 9.2-8.2 17.1-3 14.5-19.2 29.3-38.9 44.1-58.5 1.2-1.6 3.1-3 4.8-4.5 21-18.5 39-16.8 51.9 4.9 3.5 5.8 6.3 11.9 9.3 17.5 17.6-5.2 34.4-11.1 52-15 7.9-1.7 17.5.7 26.3 1.2-1.2 6-.4 12.9-4.1 17.9-9.7 13.2-21.5 25.5-32.2 38.1 14.5-1.8 30.1-5 45.7-5.4 13.5-.3 28.1.9 40.6 4.4 16.5 4.7 18 13.2 4.4 21.5-13.3 8.2-28.1 15.3-43.2 21.8-15.5 6.7-32 12.3-48.3 18-8.3 2.9-12.6 6-11.2 13.7 7.9 40.9-.3 81.1-10.5 121.2-.7 2.7 2 6.9 5 8.9 6 4 13.3 7 19.9 10.3 9.2-12.1 17.2-24.8 28-36.1 23.1-24 40.3-23.4 60.8 1.7 7.6 9.3 13.2 19.5 20.1 29.9 13.8-14.8 26.8-29.7 41-43.9 47.1-47.1 110.3-79.1 183.5-100.7 24.1-7.1 50.2-11.5 75.9-14.5 19.6-2.2 26.6 5 22.7 19.2-7.4 27.2-28 50-48 72.9-4.2 4.8-8 8.5-5.4 16 2.3 6.7-3.5 16.2-9.4 22.7-11.6 12.8-24.9 25-39.3 36.2-14.1 10.9-30.5 20.2-46.5 30.6 20.7 5.3 17.1 17.7 13.1 29.9-8.8 26.8-34.6 44.6-64.5 62.7 28.3.9 54-1.7 75.5-11.9 35.8-17 71.3-34.9 103.9-55 52.9-32.8 105-66.3 169.7-86.3 28.9-8.9 59-15.8 89.1-22.3 14.4-3.1 19.7 2 13.8 12.3-4.5 7.7-11.7 14.6-17.9 22.1 10.5.7 21.4.6 31.7 2.5 6.2 1.1 11.3 5.3 16.9 8.1-4.5 3.4-8.2 7.9-13.7 9.9-24 8.7-50 15-72.6 25.3-32.3 14.7-62.2 32.2-93.1 48.4 45.3 60.9 36.3 119.9-4.1 179.3 15.2 3.5 8.8 9.2 2.6 15-23.4 21.9-54.5 35.4-90.3 43.6-5.4 1.2-10.8 2.4-18 3.9 5.1 17.7 12 35.1 14.7 52.8 2.8 18.5 1.4 37.4 2.1 56.1.1 3.6 1 7.3 2.3 10.8 6.4 16.7 13 33.3 19.7 49.9 7.9 19.5 2.6 37.8-7.1 56.2-16.4 30.9-31.9 62.1-47.2 93.3-8.9 18.1-42.9 29.4-67.1 21.6-15.2-4.9-18.4-14.1-8-23.7 2.9-2.6 5.9-5.7 9.8-7.1 20.4-7.7 28.5-21.5 33.4-36.3 6.8-20.5 12.3-41.2 17.8-61.8 2.6-9.8-2.4-18-13.7-23.6-15.7-7.8-31.6-15.2-47.5-22.7-1.1.6-2.1 1.2-3.2 1.8 3.2 9.6 6 19.3 9.7 28.9 4 10.2 3.8 19.8-1.8 29.7C600 878.6 586 904.9 571 931c-9.5 16.4-28.5 23.6-51.7 24.1-6.3.1-16.2-3.6-18.3-7.4-2.1-3.8 1.4-11.4 5.9-14.6 32.9-23.6 41.5-54.9 51.1-85.6 1.7-5.4-6.8-13.7-13-19.1-18.9-16.5-39-32.2-58.5-48.3-2.7-2.2-4.7-4.9-6.9-7.5-14.5-17.3-14.8-18.4-42-14.1-23.1 3.6-45.9 9-67.7 15.7-8.5 2.6-13.2 11.2-20.8 16.2-10.2 6.7-4.9 13.4-2.5 20.6 6.1 18.4.5 35.8-7.9 53.1-3.5 7.2-4.6 15.2-6.3 22.8-3.7 16.7-5.6 33.7-10.9 50.2-5.5 17.3-31.3 29.6-52.4 27-18.6-2.3-22.6-9.2-12-20.5 5.8-6.2 11.4-12.4 15.2-19.7-22.1 4.8-43.6 7.9-51.8 27.1-8 18.7-24.7 33.3-54.5 35.4-7 .5-15.2 1.1-21-1-7.6-2.8-17.6-7.6-18.9-12.7-1.3-4.9 5.9-11.9 11.5-16.6 8-6.7 17.8-12.1 28.7-19.3zm229.3-497.5c0 19.1-1.1 34.9.2 50.6 3.1 35.6-21.1 57-64.3 70.1-26 7.9-25.7 9.3-9.7 26.5 3.1 3.4 7.3 6.3 11 9.4 5.5 4.6 11 4.5 17.4.7 10.7-6.5 21.6-12.9 32.6-19.2 33.2-19.1 65.5-39.3 100.2-56.9 30.3-15.4 64.2-17 98.9-5.8 32.7 10.6 58.3 26.9 78.1 48.4 3.3 3.6 6.6 7.2 10 10.8 70.4-42.1 120.1-122.9 100.9-163-5.3 3.2-10.2 6.5-15.5 9.5-36.6 20.4-74 39.9-118.4 50.6-61.9 14.9-122.2 12-180.6-9.5-20-7.2-39.9-14.5-60.8-22.2zm200.6 167.4c-13.9-23.7-31.9-39.4-62.6-44.6-6.5-1.1-16.3.2-21.3 3.3-20.1 12.2-38.9 25.6-58.1 38.5 1.3 1.4 2.6 2.8 3.9 4.1 44.5-6.5 89.1-12.5 138.1-1.3zm-439.5 37.2c-1.1 1.2-4.1 3.4-5.1 6-6.4 17.4-14.3 34.6-18 52.3-4.7 22.8 13.8 39.9 43 45.6-6.5-34-13.2-69-19.9-103.9z"}}]})(props);
}

function GunIconGen(props) {
	return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 644 441"},"child":[{"tag":"path","attr":{"d":"M29.5 3.4c-3.7 1.6-8.3 6.8-9.1 10.2-.5 1.8-1.3 2.4-3.3 2.4-4.7 0-10.9 4.9-13.9 11C1 31.5.5 34.1.2 42.5c-.3 5.5.1 13.7.8 18.2L2.2 69h3.4c4 0 4.3 1.5 1.9 9.4-1.8 5.8-1.9 14.7-.4 19.6.6 1.9 1.5 8.9 1.8 15.5.8 13.1 1.7 15.6 6.7 18 3.9 1.9 31 4.5 46.1 4.5H73v-2.5c0-1.9.5-2.5 2.3-2.5 4 0 9.7 2.1 10.6 3.9 1.1 1.9-3.3 1.7 88.1 4.1 35.3.9 39.8 1.5 46.2 6.8 4.9 4 6.7 6.2 8.7 10.7 4.2 9.3 3.5 18.7-3.3 41.7-4.4 14.9-5.1 19.7-3.6 24.3 2 6.2 6.9 7.7 28.5 8.6 9.9.4 26.2 1.5 36.3 2.4 20.8 1.7 48.7 2 57.8.5 3.4-.6 11-2.8 17-5.1 21.5-8.1 28.3-6.3 37.7 10.1 5 8.7 7.6 18.7 8.3 32.1.8 14.6 2 18 8.2 22.3 13.3 9.2 14.1 11 15.7 32.7 1.5 19.9 2.3 22 10.7 28 3.4 2.5 6.8 6 7.8 8 2.4 4.6 5.6 17.6 6.5 25.9 1.5 14.3 3.2 19.2 9 26.1 3 3.5 5.5 7.1 5.6 7.9.1.8.2 4.1.3 7.4.1 5.2.4 6.1 2.9 8 2.6 1.9 4.2 2.1 19.5 2.2 9.2.1 36.9.5 61.5.8 51.1.8 48.8 1.1 50.5-7.1.5-2.6.7-6.7.5-9l-.5-4.3h3.8c13.8-.1 30.5-10.5 33.4-20.9 2.6-9.5.6-22.5-7.4-46.5-8.6-25.5-13.9-36-41.1-80.1-30.3-49.2-39.6-71.3-42.6-101-1.9-18.5 1.8-31.9 11.7-42.5 6.4-6.9 11.3-9.4 23.3-12.1 17.8-3.9 20.1-7.6 14-21.9l-3.1-7.4.3-33.3.4-33.3-2.8-2.7c-2.6-2.7-3.2-2.8-14-3.1l-11.3-.4-1.7-4.9c-2.2-6.2-5-8.1-11.3-7.7-4.3.3-5.1.7-6.9 3.6-1.1 1.9-3.2 4.8-4.7 6.5l-2.6 3.2-249.1.3L45 16v-2c0-2.6-2.2-7-4.7-9.2-2.7-2.5-7.2-3-10.8-1.4zm281.2 142.5c7 .4 12.8 1.2 13.4 1.8 1.5 1.5-.4 24.6-2.4 29.5-.8 1.9-4 6.3-7.2 9.9-7.7 8.6-9.2 11.7-7.7 16.7.6 2.1 2 4.7 3.1 5.9l2 2.1-17.7-.4c-25.3-.6-28.4-.9-32.9-3.3-8-4.1-11.8-14.6-11.1-31 .8-16.6 5.3-26.1 14-29.6 9-3.6 10.7-3.7 46.5-1.6zm61.5 28.2c3.5 16.7-6.3 33.8-22.2 38.6-5.7 1.8-23.7 2.3-29.4.9-2.8-.7-2.7-.8 3.4-3.7 9.1-4.3 26.4-21.8 28.2-28.5 1.2-4.4 1.6-4.7 8.4-8 4-1.9 7.5-4.1 7.8-5.1 1-2.6 2.5-.3 3.8 5.8z"}}]})(props);
}

export {
	SylveonIcon,
	SylveonIconGen,
	GunIcon,
	GunIconGen,

}