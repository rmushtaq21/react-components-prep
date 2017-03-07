var GroceryList = (props) => (
  <div>
  <h1>Grocery List</h1>
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cilantro</li>
      <li>Doughnut</li>
      <Jalepenos/>
      <Kale/>
    </ul>
  </div>
);

var Kale = () => (
  <li>Kale</li>
);

var Jalepenos = () => (
  <li>Jalepenos</li>
);

// var ListItems = () => (
//   <div>
//     <h1>Shopping List</h1>
//     <GroceryList listItem={['Apples', 'Bananas', 'Cellery']}/>
//   </div>
// );


ReactDOM.render(<GroceryList />, document.getElementById('app'));
