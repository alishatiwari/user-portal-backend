import { Sequelize } from 'sequelize-typescript';
import { dbConfig } from '../config/env';
import { Users } from '../entities/user.entity';
import { UserSessions } from 'src/entities/user.sessions.entity';

export const Databaseprovider = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'postgres',
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.user,
      password: dbConfig.pass,
      database: dbConfig.database,
      logging: false,
    });
    // add required database models here
    sequelize.addModels([Users, UserSessions]);

    // will create all defined models in database (if models not already present)
    await sequelize
      .sync({ force: false })
      .then(() => console.log('Database models created!!!'))
      .catch((e) => console.error('Error in creating Database models - ', e));

    return sequelize;
  },
};
