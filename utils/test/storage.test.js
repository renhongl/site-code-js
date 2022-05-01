import { storage, log } from '..';

export function testStorage() {
  const [s] = storage('test');
  console.log(s.getItem('name'));
}
