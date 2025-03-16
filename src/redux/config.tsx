import storage from 'redux-persist/lib/storage';
// import { encryptTransform } from '../../node_modules/redux-persist-transform-encrypt/lib';
// const encryptor = encryptTransform({
//   secretKey: 'Super-Secret-key-jrtec',
//   onError: function (error) {
//     console.log(error)
//   },
// })
export const permissionsPersistConfig = {
  key: 'root',
  storage,
  // transforms: [encryptor]
};