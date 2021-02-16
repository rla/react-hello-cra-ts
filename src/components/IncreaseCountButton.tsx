import { useDispatch } from 'react-redux';
import { increaseCount } from '../actions/count';

export const IncreaseCountButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(increaseCount());
  return <button type="button" onClick={handleClick}>+1</button>;
};
