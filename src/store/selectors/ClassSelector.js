import { selector } from 'recoil';
import classatom from '../atoms/ClassAtom';
import { getClass } from '../../helpers/class';


const classselector = selector({
  key: 'classselector',
  get: async ({get}) => {
    try {
        const listclass = await getClass();
        return listclass;
    } catch (error) {
        console.log(error.message)
    }
  },
});

export default classselector;