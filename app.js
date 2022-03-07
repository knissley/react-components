// TODO
// var App = () => (
//   <div>Some cliche salutation</div>
// );


// const Apples = () => (
//   <li>Apples</li>
// );

// const Bananas = () => (
//   <li>Bananas</li>
// );

// const GroceryListItem = (props) => {

//   const onListItemClick = (event) => {
//     console.log('I got clicked');
//   }

//   return (
//   <li onClick={onListItemClick}>{props.item}</li>
// )};

// const GroceryList = (props) =>
// {
//   const onListItemClick = (event) => {
//     console.log('I got clicked');
//   }

//   return (
//   <ul>
//     {/* <GroceryListItem item={props.items[0]}/> */}
//     <li onClick={onListItemClick}>{props.items[1]}</li>
//     <li>{props.items[2]}</li>
//   </ul>
// )};

// ReactDOM.render(<App />, document.getElementById("app"));






// A class component can be defined as an ES6 class
// that extends the base Component class included in the React Library
class GroceryListItem extends React.Component {
  //A constructor method is expected on all ES6 classes
  //When React instantiates the component, it will pass 'props' to the constructor

  constructor(props) {
    console.log('within class:', props)
    // equivalent to ES5's React.Component.call(this, props)
    super(props);

    this.state = {
      bold: false
    };
  }

  //When a list item is clicked, we will toggle the 'done' boolean,
  //and our component's 'render' method will run again
  onListItemHover() {
    this.setState({
      bold: !this.state.bold
    });
  }

  //every class component must have a 'render' method
  //stateless functional components are pretty much just this method
  render() {
    // making the style conditional on our 'state' lets us update it based on user interactions
    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };


    // you can pass inline styles using React's 'style' attribute to any component

    //props is no longer passed in as an argument,
    //but instead accessed with 'this.props'
    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );

  }

}

const GroceryList = (props) =>
{
  console.log(props);

  return (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
)};

ReactDOM.render(<GroceryList items={['Apples', 'Bananas', 'Kale', 'Paper Towels', 'Cake', 'Eggs']} />, document.getElementById("app"));
