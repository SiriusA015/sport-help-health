import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import Toast from 'react-native-toast-message';
import { Avatar, Badge } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import Images from '../assets/Images'

const userInfo = {
    name: 'Elize',
    avatar: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg'
}

const unreadCount = 5;

const TopBar = (props) => {
    
    const {title, isAvatar, isBell, isEdit, isSearch} = props;
    
    return (
      <View style={styles.topBar}>
        { isAvatar ? 
            <Avatar
                containerStyle={styles.avatar}
                rounded
                source={{uri: userInfo.avatar}}
                size="medium"
            /> :
            <TouchableOpacity>
                <MaterialIcons 
                    name="arrow-back" 
                    size={35} 
                    color="#ffffff" 
                    style={styles.Icon} 
                />
            </TouchableOpacity>
        }
        <Text style={styles.titleTxt}>
            {title}
        </Text>
        {
            title === 'Welcome' && 
            <Text style={styles.user}>{',  ' + userInfo.name}</Text>
        }
        { isBell && 
            <TouchableOpacity style={styles.Icon} >
                <EvilIcons 
                    name="bell" 
                    size={40} 
                    color="#ffffff" 
                />
                <Badge
                    status="warning"
                    value={unreadCount}
                    containerStyle={{ position: 'absolute', top: -3, right: -4 }}
                />
            </TouchableOpacity>
        }
        { isSearch && 
            <TouchableOpacity>
                <Feather 
                    name="search" 
                    size={35} 
                    color="#ffffff" 
                    style={styles.Icon} 
                />
            </TouchableOpacity>
        }
        { isEdit && 
            <TouchableOpacity>
                <Feather 
                    name="edit" 
                    size={35} 
                    color="#ffffff" 
                    style={styles.Icon} 
                />
            </TouchableOpacity>
        }
      </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: '#A5593C',
        height: 80,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row'
    },
    titleTxt: {
        fontWeight: 'bold',
        fontFamily: 'Open Sans',
        fontSize: 20,
        color: '#ffffff',
        marginLeft: 10,
        marginTop: 30
    },
    user: {
        fontFamily: 'Open Sans',
        fontSize: 20,
        color: '#ffffff',
        marginTop: 30
    },
    avatar: {
        marginLeft: 12,
        marginTop: 20
    },
    Icon: {
        marginTop: 25,
        position: 'absolute',
        right: 15
    }
});

export default TopBar;
