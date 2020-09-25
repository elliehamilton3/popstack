import {
  Model, Column, Table, CreatedAt, UpdatedAt, DeletedAt, Unique,
} from 'sequelize-typescript';

@Table
export default class User extends Model<User> {
  @Unique
  @Column
  userUuid: string;

  @Unique
  @Column
  authId: string;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  phoneNumber: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  @Column
  deletedAt!: Date;
}
