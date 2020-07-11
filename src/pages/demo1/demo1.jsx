import React, { Component } from 'react';
import styles from './demo1.module.less'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import store from '../store/demo1'

class Demo1 extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.storeChange)
  }

  storeChange = () => {
    this.setState(store.getState)
  }

  changeValue = (e) => {
    const action = {
      type: 'changeValue',
      value: e.target.value
    }
    store.dispatch(action)
  }

  addList = () => {
    const action = {
      type: 'addList',
      value: this.state.inputValue
    }
    store.dispatch(action)
  }

  render() {
    return ( 
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <TextField label="something to do" variant="outlined" size="small" onChange={this.changeValue} value={this.state.inputValue}/>
          <Button variant="contained" color="primary" size="large" onClick={this.addList}>增加</Button>
        </div>
        <List component="nav" aria-label="secondary mailbox folders">
          {
            this.state.list.map((item, index) =>
              <ListItem button key={index}>
                {index+1}.{item}
              </ListItem>
            )
          }
        </List>
      </div>
    );
  }
}
 
export default Demo1;