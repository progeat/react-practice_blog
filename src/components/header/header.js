import { Logo } from './components';
import styled from 'styled-components';

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
	</header>
);

export const Header = styled(HeaderContainer)`
	position: fixed;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	background-color: #fff;
	box-shadow: 0px -2px 17px #000;
`;
