import React from 'react';
import '../styles/App.module.css';
import {TextField, Button} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
          renderInput={(params) => <TextField {...params}  label="Itens" variant="outlined" />}
        />
          <Button variant="contained" color="primary" onClick={() => this.getPreco()}>Conferir preço</Button>
          <Table >
    {(this.state.json.length > 0) &&
    <TableHead>
          <TableRow>
            <TableCell>Cidade</TableCell>
            <TableCell align="right">Compra </TableCell>
            <TableCell align="right">Venda</TableCell>
          </TableRow>
        </TableHead>
  }
          <TableBody>
          {this.state.json.map((item) => (
            <TableRow key={item.city}>
              <TableCell component="th" scope="row">
                {item.city}
              </TableCell>
              <TableCell align="right">{item.buy_price_min} - {item.buy_price_max}</TableCell>
              <TableCell align="right">{item.sell_price_min} - {item.sell_price_max}</TableCell>
            </TableRow>
          ))}
        </TableBody>
          </Table>
        </header>
      </div>
    );
  }

}

export default App;
