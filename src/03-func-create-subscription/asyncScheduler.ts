// return a subscription
import { asyncScheduler } from 'rxjs';

const greetings = () => console.log('Hola mundo');
const greetingsWithName = ({ name, lastname }) => console.log(`Hola ${name} ${lastname}`);

asyncScheduler.schedule(greetings, 2000);
asyncScheduler.schedule(greetingsWithName, 3000, { 'name': 'Gustavo', 'lastname': 'Mahecha' });