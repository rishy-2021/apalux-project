import {  SignInRequestBody, SignUpRequestBody } from '../../services/api';
import { AddUserRequestBody } from '../../services/api/user-api';

export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const dayTimes = [{
  label: 'Morning',
  sunRGB: '204,98,65',
  backgroundColor: '#FFE3D6',
  text: '#fff'
},
{
  label: 'Afternoon',
  sunRGB: '255,248,196',
  backgroundColor: '#95C2FF',
  text: '#7199CB'
},
{
  label: 'Evening',
  sunRGB: '221,135,82',
  backgroundColor: '#EAE5D6',
  text: '#fff'
},
{
  label: 'Evening',
  sunRGB: '58,86,123',
  backgroundColor: '#233752',
  text: '#fff'
}];

export const addUserInput: AddUserRequestBody = {
  'name': '',
  'designation': '',
  'address': {
    'localityLine': '',
    'city': '',
    'state': '',
    'pinCode': '',
  }
};

export const signUpInput: SignUpRequestBody = {
  'email': '',
  'password': ''
}

export const signInInput: SignInRequestBody = {
  'email': '',
  'password': ''
}