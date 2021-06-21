import React from 'react';
import { render } from '@testing-library/react-native';

import MovieItem from 'src/components/movieItem';

describe('test Input', () => {
  test('it renders correctly', () => {
    const input = render(<MovieItem />);
    expect(input).toMatchSnapshot();
  });

  test('it renders correctly with title and date', () => {
    const input = render(<MovieItem title={'test'} date={'titleDate'} />);
    expect(input).toMatchSnapshot();
  });
});
