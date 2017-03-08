var GroceryList = (props) => (
  <div>
    <h1>Grocery List</h1>
    {props.items.map((item, index) =>
      <GroceryListItem key={index} item={item} />
    )}
    <Kale />
    <Jalepenos />
  </div>
);

var Kale = () => (
  <li>Kale</li>
);

var Jalepenos = () => (
  <li>Jalepenos</li>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onClickItem() {
    console.log(this.state.done);
    this.setState({
      done: !this.state.done
    });
    console.log(this.state.done);
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onClickItem.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<GroceryList items={['Mop', 'Razor', 'Floss']}/>, document.getElementById('app'));

