import React from 'react';
import styled from 'styled-components';
import Demo from "./Demo";

const AppContainer = styled.div`
	padding: 50px;
	width: 100vw;
	height: 100vh;
	overflow: auto;
	background-color: gray;
`;

const App = () => {
	return (
		<AppContainer>
			<Demo/>
		</AppContainer>
	);
}
	
export default App;