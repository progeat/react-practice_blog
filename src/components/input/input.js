import styled from 'styled-components';

const InputContainer = ({ className, width, ...props }) => {
	return <input className={className} {...props} />;
};

export const Input = styled(InputContainer)`
	height: 40px;
	margin: 0 0 10px;
	width: ${({ width = 'auto' }) => width};
	padding: 10px;
	font-size: 18px;
	border: 1px solid #000;
`;
