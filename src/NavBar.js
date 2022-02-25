import { RiFoldersLine } from 'react-icons/ri';
import { IoLogoGithub } from 'react-icons/io5'
import { SylveonIconGen, GunIconGen } from './svgsLogo';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

const NavBar = () => {
	var finalCss = 'fixed flex flex-row w-screen h-16 m-0 bg-gray-900 shadow';
	if(isMobile) {
		finalCss += ' bottom-0';
	} else {
		finalCss += ' bottom-[-3.75rem] hover:bottom-0 transition-all duration-500';
	}

	return (
		<div className={ finalCss }>
			<NavBarIcon icon={ <SylveonIconGen size="2rem"/>} clink="/" text='Homepage'/>
			{/*<NavBarIcon icon={ <FaUsers size="2rem"/>} clink="community" text='Community'/>*/}
			<NavBarIcon icon={ <RiFoldersLine size="2rem" />} clink="files" text="Files" />
			<NavBarIcon icon={<GunIconGen size='2rem'/>} clink='gunHistory' text='Gun History' />
			<NavBarIcon icon={<IoLogoGithub size='2rem'/>} clink='gitRedirect' text='Github' />
		</div>
	);
}

/**
 * @deprecated
 */
const NavBarIconCluster = (props) => {
	return (
		<div className='navbar-icon group'>
			{props.icon}
			<div className='scale-0 icon-cluster group-hover:scale-100'>
				{props.children}
			</div>
		</div>
	);
}

const NavBarIcon = ({icon, text = "Tooltip", clink}) => {
	return (
		
		<Link to={clink} className='relative flex items-center justify-center mx-auto my-auto'>
			<div className='navbar-icon group'>
				{ icon }
				<span className='scale-0 navbar-tooltip group-hover:scale-100'>
					{ text }
				</span>
			</div>
		</Link>
	);
}

export default NavBar;