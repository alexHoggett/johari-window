/*
 * @jest-environment jsdom
 */

import { screen, render, fireEvent } from '@testing-library/react';
import Adjective from '../Adjective';

describe('Adjective Component tests', () => {
  it('renders on the page', () => {
    render(<Adjective text={'Testing'}/>);
    const button = screen.getByRole('button', {name: /Testing/i});
    expect(button).toBeDefined();
  });

  xit('Changes colour when clicked', () => {
    render(<Adjective text={'Testing'}/>);
    const button = screen.getByRole('button', {name: /Testing/i});
    // fireEvent.click(button);
  })
})