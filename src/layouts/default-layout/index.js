import React, { useContext } from 'react';

import DefaultViews from 'views/default-views';

export const DefaultLayout = ({navigation}) => {

  return (
    <DefaultViews />
  )
}

export default React.memo(DefaultLayout);