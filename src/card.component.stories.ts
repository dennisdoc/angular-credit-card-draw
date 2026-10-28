import type {Meta, StoryObj} from '@storybook/angular-vite';
import {CardDraw} from './card.component';

const meta: Meta<CardDraw> = {
  title: 'Components/CardDraw',
  component: CardDraw,
  tags: ['autodocs'],
  args: {
    number: '1234 5678 9012 3456',
    name: 'Emma Watson',
    expiration: '12/29',
    ccv: '999',
    background: '#1a1f71',
    height: '250px',
    width: '400px',
    toggle: false,
    hideBrandLogo: false
  },
  argTypes: {
    background: {control: 'color'},
    height: {control: 'text'},
    width: {control: 'text'},
    toggle: {control: 'boolean'},
    hideBrandLogo: {control: 'boolean'}
  }
};

export default meta;

type Story = StoryObj<CardDraw>;

export const Front: Story = {};

export const Back: Story = {
  args: {
    toggle: true
  }
};
