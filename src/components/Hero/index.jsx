import React, { Component } from 'react';

import Container from '../../common/Container';
import NavBar from './NavBar';
import HeroSection from './Hero';
import styles from './style.module.css';

export class Hero extends Component {
  render() {
    return (
      <Container styles={styles.body}>
        <NavBar />
        <HeroSection />
      </Container>
    );
  }
}

export default Hero;
