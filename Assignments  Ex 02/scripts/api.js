async function fetchData() {
  	let response = await fetch(`http://localhost:3000/People`);
    let data = await response.json();
 	return data
}

export {fetchData}