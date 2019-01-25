import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import OfflineAlert from 'components/offlineAlert';

describe('<OfflineAlert />', () => {
  const setup = () => {
    const { getByText } = render(<OfflineAlert />);
    return { getByText };
  };

  test('calls window.location.reload on click', () => {
    const { getByText } = setup();

    jest.spyOn(window.location, 'reload');
    fireEvent.click(getByText('reload the page.'));

    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});