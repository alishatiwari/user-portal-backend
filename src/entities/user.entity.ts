import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table
export class Users extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  userid: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  firstname: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  lastname: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING(255),
  })
  avatar: string;
}
