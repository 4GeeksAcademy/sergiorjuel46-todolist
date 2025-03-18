import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [todos, setTodos] = useState([]);
	
	return (
		<div className="titulo">
			<h1>todos</h1>
		<div className="container">
			
			<ul>
				<li>
					<input type="text" 
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e) => e.key === "Enter" ? setTodos(todos.concat(inputValue)) : null}
					placeholder="What do you need to do?"/>
				
				</li>
				{todos.map((item, index) => (
					<li key={index}>
						{item}<i class="fa-solid fa-trash"
						 onClick={() => 
							setTodos(
								todos.filter(
									(t, currentIndex) => 
										index !== currentIndex)
									)
									}></i>
					</li>
				))}

			</ul>
		
			<div className="todos-counter">
			{ `${todos.length} items left `}
			</div>
		

		</div>
		</div>
	);
};

export default Home;