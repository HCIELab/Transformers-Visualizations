import React from 'react';
import styled from 'styled-components';
import Demo from "./Demo";

const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: auto;
`;

const App = () => {
	return (
		<AppContainer>
			<Demo/>
		</AppContainer>
	);
}
	
export default App;