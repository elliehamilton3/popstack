import {
  Model, Column, Table, CreatedAt, UpdatedAt, DeletedAt,
  // BelongsTo, ForeignKey,
} from 'sequelize-typescript';
// import User from './User';

@Table
export default class Resume extends Model<Resume> {
  @Column
  bio!: string;

  // @ForeignKey(() => User)
  // @Column
  // userId: number;

  // @BelongsTo(() => User, {
  //   onUpdate: 'CASCADE',
  //   onDelete: 'CASCADE',
  //   hooks: true,
  // })
  // user: User;

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
