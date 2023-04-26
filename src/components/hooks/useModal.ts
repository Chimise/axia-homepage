import {inject} from 'vue';
import { menuKey } from '@/index';

const useModal = () => {
    const data = inject(menuKey);
    if(!data) {
        throw new Error('Menu data is not provided');
    }

    return data;
}


export default useModal;