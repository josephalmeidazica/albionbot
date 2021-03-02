import React from 'react';
import {TextField, Input} from '@material-ui/core';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
const tipos =  require('../json/tipos.json');

class Calculadora extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      quantidades: [],
      quantidadesLV1: [],
      quantidadesLV2: [],
      quantidadesLV3: [],
      panel1: false,
      value: '',
    };
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeQuantidade = this.handleChangeQuantidade.bind(this);
    this.handleChangePanel1 = this.handleChangePanel1.bind(this);
    this.handleChangePanel2 = this.handleChangePanel2.bind(this);
    this.handleChangePanel3 = this.handleChangePanel3.bind(this);
  }

  handleChangeSelect(item) {
    console.log(item.value);
    this.setState({value: item.value});
    
  }

  handleChangeQuantidade(event){
    let array = this.state.quantidades;
    array[event.target.name] = event.target.value
    this.setState({quantidades: array});
    console.log(this.state.quantidades);
  }

  handleChangeQuantidadeLV1(event){
    let array = this.state.quantidadesLV1;
    array[event.target.name] = event.target.value
    this.setState({quantidadesLV1: array});
    console.log(this.state.quantidades);
  }

  handleChangeQuantidadeLV2(event){
    let array = this.state.quantidadesLV2;
    array[event.target.name] = event.target.value
    this.setState({quantidadesLV2: array});
    console.log(this.state.quantidades);
  }

  handleChangeQuantidadeLV3(event){
    let array = this.state.quantidadesLV3;
    array[event.target.name] = event.target.value
    this.setState({quantidadesLV3: array});
    console.log(this.state.quantidades);
  }

  handleChangePanel1(){
    this.setState({panel1: !this.state.panel1});
  }
  handleChangePanel2(){
    this.setState({panel1: !this.state.panel1});
  }
  handleChangePanel3(){
    this.setState({panel1: !this.state.panel1});
  }

  calcular(tipo){

  }

  render(){
  return (
    <div className={styles.container}>

      <main className={styles.main}>


        <p className={styles.description}>
          Calculadora de refinamento:
        </p>
        <p>
        Insira a Quantidade de cada tier dos materiais presentes no seu inventário!
        </p>

        <div className={styles.grid}>
        <Autocomplete
          onChange={(event, value) => this.handleChangeSelect(value)}
          style={{margin: 25}}
          options={tipos}
          getOptionLabel={(option) => option.nome}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params}  label="Tipo" variant="outlined" />}
        />
        </div>
        <div className={styles.grid}>
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt1"
          label="Quantidade T1"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt2"
          label="Quantidade T2"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt3"
          label="Quantidade T3"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt4"
          label="Quantidade T4"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt5"
          label="Quantidade T5"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt6"
          label="Quantidade T6"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt7"
          label="Quantidade T7"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt8"
          label="Quantidade T8"
          variant="outlined"
        />
        </div>
        <Accordion square expanded={this.state.panel1} onChange={this.handleChangePanel1}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Itens Incomuns</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className={styles.grid}>
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt1"
          label="Quantidade T1.1"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt2"
          label="Quantidade T2.1"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt3"
          label="Quantidade T3.1"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt4"
          label="Quantidade T4.1"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt5"
          label="Quantidade T5.1"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt6"
          label="Quantidade T6.1"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt7"
          label="Quantidade T7.1"
          variant="outlined"
        />
        <TextField
          style= {{margin: 25}}
          onChange={this.handleChangeQuantidade}
          name="qt8"
          label="Quantidade T8.1"
          variant="outlined"
        />
        </div>
        </AccordionDetails>
      </Accordion>
        <Accordion square expanded={this.state.panel1} onChange={this.handleChangePanel2}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Itens Raros</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <div className={styles.grid}>
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt1"
            label="Quantidade T1.2"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt2"
            label="Quantidade T2.2"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt3"
            label="Quantidade T3.2"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt4"
            label="Quantidade T4.2"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt5"
            label="Quantidade T5.2"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt6"
            label="Quantidade T6.2"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt7"
            label="Quantidade T7.2"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt8"
            label="Quantidade T8.2"
            variant="outlined"
          />
          </div>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={this.state.panel1} onChange={this.handleChangePanel3}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Itens Excepcionais</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <div className={styles.grid}>
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt1"
            label="Quantidade T1.3"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt2"
            label="Quantidade T2.3"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt3"
            label="Quantidade T3.3"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt4"
            label="Quantidade T4.3"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt5"
            label="Quantidade T5.3"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt6"
            label="Quantidade T6.3"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt7"
            label="Quantidade T7.3"
            variant="outlined"
          />
          <TextField
            style= {{margin: 25}}
            onChange={this.handleChangeQuantidade}
            name="qt8"
            label="Quantidade T8.3"
            variant="outlined"
          />
          </div>
          </AccordionDetails>
        </Accordion>
      </main>


    </div>
  );}
}

export default Calculadora;