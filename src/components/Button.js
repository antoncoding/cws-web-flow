import React, { Component } from 'react';
import styled from 'styled-components';
import { ORANGEY_YELLOW, SMALL } from '../constant';

export default class Button extends Component {
	render() {
		const { fontSize, handleOnClick, width, theme } = this.props;
		return (
			<ButtonMain theme={theme} width={width} onClick={handleOnClick}>
				<Text fontSize={fontSize}>{this.props.label}</Text>
			</ButtonMain>
		);
	}
}

const ButtonBase = styled.div`
	box-sizing: border-box;
	margin: 0px 10px 10px 0;
	width: 100%;
	height: 55px;
	border-radius: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: background-color color 1s ease-in-out;
	@media (max-width: 480px) {
		width: 100%;
	}
`;

const ButtonMain = styled(ButtonBase)`
	max-width: ${(props) => (props.width ? `${props.width}px` : '320px')};
	border: ${(props) => (props.theme.button.borderColor ? `solid 1px ${props.theme.button.borderColor}` : 'none')};
	background-color: ${(props) => props.theme.button.background};
	color: ${(props) => props.theme.button.color};
	&:hover {
		border-color: #f09307;
		background-color: ${(props) => props.theme.button.hoverBackground};
		color: ${(props) => props.theme.button.hoverColor};
	}
`;

ButtonMain.defaultProps = {
	theme: {
		button: {
			borderColor: ORANGEY_YELLOW,
			background: '#212529',
			color: ORANGEY_YELLOW,
			hoverBackground: '#212529',
			hoverColor: ORANGEY_YELLOW
		}
	}
};

const Text = styled.div`font-size: ${(props) => (props.fontSize ? props.fontSize : SMALL)};`;
