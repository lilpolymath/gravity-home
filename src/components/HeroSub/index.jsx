import React, { Component } from 'react';

import Container from '../../common/Container';
import HeroSubSection from './HeroSub';
import styles from './style.module.css';

export class HeroSub extends Component {
  render() {
    return (
      <Container styles={styles.body}>
        <HeroSubSection />
      </Container>
    );
  }
}

export default HeroSub;
