// List rendering 

function List() {
     const fruits = [{ id: 1, name: "apple", calories: 95 },
     { id: 2, name: "banana", calories: 45 },
     { id: 3, name: "pineapple", calories: 105 },
     { id: 4, name: "orange", calories: 159 }];

     // fruits.sort((a,b) => a.name.localeCompare(b.name));  // ALPHABETICAL
     fruits.sort((a,b) => b.name.localeCompare(a.name));  // REVERSE ALPHABETICAL
     fruits.sort((a,b) => a.calories - b.calories);  // NUMERIC 

     const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);
     return (<ul>{listItems}</ul>);
}

export default List;