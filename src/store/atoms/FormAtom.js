import { atom } from 'recoil';

const formatom = atom({
  key: 'formatom', 
  default: {
    jeniskelamin: null,
    jenis: null,
    tempat: null,
    tahun: null,
  }, 
});

export default formatom;