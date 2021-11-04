import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table
export class UserSessions extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  userid: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  token: string;
}
