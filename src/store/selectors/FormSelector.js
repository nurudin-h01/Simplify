import { selector } from 'recoil';
import formatom from '../atoms/FormAtom';


const formselector = selector({
  key: 'formselector',
  get: ({get}) => {
    const form = get(formatom);
    return form;
  },
});

export default formselector;