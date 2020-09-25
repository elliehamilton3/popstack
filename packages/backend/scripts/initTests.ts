import sequelize from '../src/sequelize';

const { exec } = require('child_process');

export default async function init() {
  await sequelize.sync();
  await new Promise((resolve, reject) => {
    const child = exec('npm run db:seed:test');

    child.stdout.on('data', (data: any) => {
      // eslint-disable-next-line no-console
      console.log('🌱 Seeder 🌱', Buffer.from(data, 'utf-8').toString());
    });
    child.stderr.on('data', (err: Error) => reject(err));
    child.on('close', (code: number) => resolve(code));
  });
}
