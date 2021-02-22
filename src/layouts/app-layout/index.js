import React, { useContext } from 'react';

import { View, Text } from 'react-native';

import AppViews from 'views/app-views';

export const AppLayout = ({ navigation }) => {
  
  return (
    <>
        <AppViews />
    </>
  )
}

export default React.memo(AppLayout);