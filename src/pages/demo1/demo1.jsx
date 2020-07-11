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
  }

  render() {
    return ( 
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <TextField label={this.state.placeholder} variant="outlined" size="small" />
          <Button variant="contained" color="primary" size="large">增加</Button>
        </div>
        <List component="nav" aria-label="secondary mailbox folders">
          {
            this.state.list.map((item, index) =>
              <ListItem button>
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