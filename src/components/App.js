import React, {useState} from "react";
import Nav from "./Nav";
import Hogtile from "./Hogtile";
import Filter from "./Filter";

/*
App
|-Filter
|-Hogtile

*/

import hogs from "../porkers_data";
console.log(hogs)

function App() {

	const [filtered, setfiltered] = useState(false)
	const [renderedHogs, setRenderedHogs] = useState(hogs)

	const weightSorted = [...hogs].sort((hog, nextHog) => {return hog.weight - nextHog.weight } )
	const nameSorted = [...hogs].sort((hog, nextHog)=> {
		const nameOne = hog.name.toUpperCase()
		const nameTwo = nextHog.name.toUpperCase()
		if(nameOne > nameTwo){
			return 1
		}else if (nameOne < nameTwo){
			return -1
		}
		return 0;
	})

	console.log(hogs)
	console.log(nameSorted)
	console.log(weightSorted)

	function onFilterClick(){
		setfiltered(filtered => !filtered)
	}

	function onSortClick(buttonId){
		if(buttonId === "weight"){
		setRenderedHogs(weightSorted)
		}else if(buttonId === "name"){
		setRenderedHogs(nameSorted)
		} else if(buttonId === "all"){
		setRenderedHogs(hogs)
		setfiltered(false)
		}
	}

	return (
		<div className="App">
			<Nav />
			<Filter onFilterClick={onFilterClick} onSortClick={onSortClick}/>
			<br></br>
			<div className="ui grid container">
			{filtered ? 
			renderedHogs.filter(hog=>hog.greased===true).map(hog => <Hogtile  
				filteredStatus={filtered}
				hogName={hog.name} 
				hogImg={hog.image}
				hogSpecialty={hog.specialty}
				hogGreasedStatus={hog.greased}
				hogHighestMedal={hog["highest medal achieved"]}
				hogWeight={hog.weight}
				/>)
			:
			renderedHogs.map(hog => 
			<Hogtile  
			filteredStatus={filtered}
			hogName={hog.name} 
			hogImg={hog.image}
			hogSpecialty={hog.specialty}
			hogGreasedStatus={hog.greased}
			hogHighestMedal={hog["highest medal achieved"]}
			hogWeight={hog.weight}
			/>)}
			</div>
		</div>
	);
}

export default App;
