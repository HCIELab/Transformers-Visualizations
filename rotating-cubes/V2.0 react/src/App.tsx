import React from 'react';
import styled from 'styled-components';
import Demo from "./Demo";

const AppContainer = styled.div`
	padding: 50px;
	background-color: gray;
`;

const App = () => {
	return (
		<AppContainer>
			Hello there   
			<Demo/>
		</AppContainer>
	);
}
	
export default App;