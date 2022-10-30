// import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
// import styled from 'styled-components/'
// import { colors } from './constants'
// import Constants from 'expo-constants'

// const StatusBarHeight = Constants.statusBarHeight;

// const { primary, secondary, blue, dark, gray, blueGray, warmGray, coolGray, red, light, rose, pink, success } = colors

// export const StyledTextInput = styled.TextInput`
//   background-color: ${secondary};
//   padding: 15px;
//   padding-left: 55px;
//   padding-right: 55px;
//   border-radius: 5px;
//   font-size: 16px;
//   height: 60px;
//   margin-vertical: 3px;
//   margin-bottom: 10px;
//   color: ${tertiary};
// `;

// export const StyledInputLabel = styled.Text`
//   color: ${tertiary};
//   font-size: 13px;
//   text-align: left;
// `;

// export const LeftIcon = styled.View`
//   left: 15px;
//   top: 38px;
//   position: absolute;
//   z-index: 1;
// `;
 
// export const RightIcon = styled.TouchableOpacity`
//   right: 15px;
//   top: 38px;
//   position: absolute;
//   z-index: 1;
// `;

// export const StyledButton = styled.TouchableOpacity`
//   padding: 15px;
//   background-color: ${primary[600]};
//   justify-content: center;
//   align-items: center;
//   border-radius: 5px;
//   margin-vertical: 5px;
//   height: 60px;

//   ${(props) =>
//     props.google == true &&
//     `
//     background-color: ${pink[900]};
//     flex-direction: row;
//     justify-content: center;
//   `}
// `;

// export const ButtonText = styled.Text`
//   color: ${primary};
//   font-size: 16px;

//   ${(props) =>
//     props.google == true &&
//     `
//     color: ${primary};
//     padding: 25px;
//   `}
// `;