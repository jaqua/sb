import fs from 'fs';
import path from 'path';

export const resetPwd = fs.readFileSync(
  path.join(__dirname, 'admin/resetPwd.gql'),
  'utf8'
);
export const changePwd = fs.readFileSync(
  path.join(__dirname, 'admin/changePwd.gql'),
  'utf8'
);
