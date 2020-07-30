import React, { Component } from 'react';

import Container from '../../common/Container';
import ClientSection from './Clients';
import styles from './style.module.css';

export class Clients extends Component {
  render() {
    return (
      <Container styles={styles.body}>
        <ClientSection />
      </Container>
    );
  }
}

export default Clients;
