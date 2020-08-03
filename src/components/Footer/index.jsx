import React, { Component } from 'react';

import Container from '../../common/Container';
import FooterSection from './Footer';
import styles from './style.module.css';

export class Footer extends Component {
  render() {
    return (
      <Container styles={styles.body}>
        <FooterSection />
      </Container>
    );
  }
}

export default Footer;
