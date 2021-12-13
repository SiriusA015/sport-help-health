import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import Toast from 'react-native-toast-message';

import LoadingOverlay from '../../components/LoadingOverlay';
import Images from '../../assets/Images'
import TopBar from '../../components/TopBar'

const MarketplaceHomeScreen = () => {

    const [loading, setLoading] = useState(false);
    
    return (
      <View>
        <SafeAreaView>
          {loading && <LoadingOverlay />}
          <View>
            <TopBar 
              title="Welcome" 
              isAvatar={true}
              isBell={true}
            />
            <Text>Marketplace home Screen</Text>
          </View>
        </SafeAreaView>
      </View>
    );
}

const styles = StyleSheet.create({
    flex: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default MarketplaceHomeScreen;
