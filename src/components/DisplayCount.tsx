import { useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';

export const DisplayCount = () => {
  const count = useSelector((state: RootState) => state.count.count);
  return <span data-testid="display-count">Vajutatud: {count}</span>;
};
