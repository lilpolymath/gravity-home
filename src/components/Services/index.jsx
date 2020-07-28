import React, { Component } from 'react';

import Container from '../../common/Container';
import ServicesSection from './Services';
import styles from './style.module.css';

export class Services extends Component {
  render() {
    return (
      <Container styles={styles.body}>
        <ServicesSection />
      </Container>
    );
  }
}

export default Services;
