import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Section from '..'
import { BookCard } from '../../Card';

import statsManual from '../../../graphics/books/manual-statistical-analysis-in-psychology.jpg'
import statsBook from '../../../graphics/books/process-statistical-analysis-in-psychology.jpg'
import cognitiveBook from '../../../graphics/books/cognitive-psychology.jpg'
import resarchAndStatsBook from '../../../graphics/books/process-research-and-statistical-analysis-in-psychology.jpg'
import researchAndStatsManual from '../../../graphics/books/manual-psychological-research-and-statistical-analysis.jpg'
import researchBook from '../../../graphics/books/process-of-research-in-psychology.jpg'
import researchManual from '../../../graphics/books/manual-psychological-research.jpg'

const BookList = [
  {
    image: resarchAndStatsBook,
    title: 'The Process of Research and Statistical Analysis in Psychology',
    url: 'https://us.sagepub.com/en-us/nam/the-process-of-research-and-statistical-analysis-in-psychology/book262937',
  },

  {
    image: researchAndStatsManual,
    title: 'Lab Manual for Psychological Research and Statistical Analysis',
    url: 'https://us.sagepub.com/en-us/nam/lab-manual-for-psychological-research-and-statistical-analysis/book267323',
  },

  {
    image: researchBook,
    title: 'The Process of Research in Psychology',
    url: 'https://us.sagepub.com/en-us/nam/the-process-of-research-and-statistical-analysis-in-psychology/book262937',
  },

  {
    image: researchManual,
    title: 'Lab Manual for Psychological Research',
    url: 'https://us.sagepub.com/en-us/nam/lab-manual-for-psychological-research/book258130',
  },

  {
    image: cognitiveBook,
    title: 'Cognitive Psychology: Theory, Process, and Methodology',
    url: 'https://us.sagepub.com/en-us/nam/cognitive-psychology/book253925',
  },

  {
    image: statsBook,
    title: 'The Process of Statistical Analysis in Psychology',
    url: 'https://us.sagepub.com/en-us/nam/the-process-of-statistical-analysis-in-psychology/book248460',
  },

  {
    image: statsManual,
    title: 'Lab Manual for Statistical Analysis ',
    url: 'https://us.sagepub.com/en-us/nam/lab-manual-for-statistical-analysis/book248498',
  },
];
export default function Books() {
  return (
    <Section title="Books" id="books" className="bg-primary text-light">
      <div class="col-xs-8 col-md-10 col-lg-11 mx-auto" id="book-slider">
        <Carousel indicators={false}>
          {BookList.map((b) => (
            <Carousel.Item>
              <BookCard
                title={b.title}
                imageSrc={b.image}
                buttonDestination={b.url}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <p class="nav-inst-mobile text-center font-italic muted text-light">Swipe to scroll</p>
    </Section>
  );
}
