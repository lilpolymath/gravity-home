import React, { Component } from 'react';

import Container from '../../common/Container';
import AboutSection from './About';
import styles from './style.module.css';

export class About extends Component {
  render() {
    return (
      <Container styles={styles.body}>
        <AboutSection />
      </Container>
    );
  }
}

export default About;
