import React, { Component } from 'react';

import Container from '../../common/Container';
import WorkSection from './Works';
import styles from './style.module.css';

export class Works extends Component {
  render() {
    return (
      <Container styles={styles.body}>
        <WorkSection />
      </Container>
    );
  }
}

export default Works;
