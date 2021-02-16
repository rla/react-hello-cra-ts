import { DisplayCount } from './DisplayCount';
import { IncreaseCountButton } from './IncreaseCountButton';

export const CountPage = () => {
  return (
    <div style={{padding: '100px'}}>
      <div>
        <IncreaseCountButton />
      </div>
      <div>
        <DisplayCount />
      </div>
    </div>
  );
};
