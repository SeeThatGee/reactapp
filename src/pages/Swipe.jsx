import React from 'react';
import { Heading, Text } from '../components/Typography';
import { SwipeableCardStack } from '../components/SwipeableCardStack';

const cardData = [
  { title: 'Card 1', description: 'Card 1.' },
  { title: 'Card 2', description: 'Card 2.' },
  { title: 'Card 3', description: 'Card 3.' },
];

export const Swipe = () => {
  return (
    <>
      <Heading>Swipe</Heading>
      <Text>Swipe through your options here.</Text>
      <SwipeableCardStack data={cardData} />
    </>
  );
};