import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';



configure ({ adapter: new Adapter() });

const mockConfigureStore = configureStore();

export const mockStore = (initState) => {
    return mockConfigureStore(initState);
}