import React, { Component } from 'react';

import Container from '../../common/Container';
import TestimonialSection from './Testimonial';
import styles from './style.module.css';

export class Testimonial extends Component {
  render() {
    return (
      <Container styles={styles.body}>
        <TestimonialSection />
      </Container>
    );
  }
}

export default Testimonial;
