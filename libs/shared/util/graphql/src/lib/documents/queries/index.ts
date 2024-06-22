import { readFileSync } from 'fs';
import { join } from 'path';

export const error = readFileSync(join(__dirname, 'error.gql'), 'utf8');
