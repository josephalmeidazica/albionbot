import React from 'react';
import {Table, Button} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
const itensJson = require('./itens.json');
const itens = Array.from(itensJson);


class  App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      json: [],
      item: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  getPreco(){
    fetch('https://www.albion-online-data.com/api/v2/stats/prices/'+this.state.value+'')
    .then(response => response.json())
    .then((jsonData) => {
      // jsonData is parsed json object received from url
      console.log(jsonData)
      this.setState({
        json: Array.from(jsonData),
      });
    })
    .catch((error) => {
      // handle your errors here
      console.error(error)
    })
  }
  handleChange(item) {
    this.setState({value: item.UniqueName});
  }
  render (){
    return(
      <div className="App">
        <header className="App-header">
        <Autocomplete
          onChange={(event, value) => this.handleChange(value)}
          id="combo-box-demo"
          options={itens}
          getOptionLabel={(option) => option.LocalizedNames['PT-BR']}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params}  label="Combo box" variant="outlined" />}
        />
          <Button onClick={() => this.getPreco()}>Conferir preço</Button>
          <Table striped bordered hover>
  <thead>
    {(this.state.json.length > 0) &&
        <tr>
        <th>Cidade</th>
        <th>Compra (MIN - MAX)</th>
        <th>Venda (MIN - MAX)</th>
      </tr>
    }

    </thead>
    <tbody>

    {this.state.json.map((item) =>{
        return(
          <tr>
          <td>{item.city}</td>
          <td>{item.sell_price_min} - {item.sell_price_max}</td>
          <td>{item.buy_price_min} - {item.buy_price_max}</td>
          </tr>
        );
      })}
          </tbody>
          </Table>
        </header>
      </div>
    );
  }

}

export default App;
