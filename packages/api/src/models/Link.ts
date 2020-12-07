import {
  Model, Column, Table, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo,
} from 'sequelize-typescript';
import Resume from './Resume';

@Table
export default class Link extends Model<Link> {
  @Column
  title: string;

  @Column
  link: string;

  @ForeignKey(() => Resume)
  @Column
  resumeId: number;

  @BelongsTo(() => Resume, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
  resume: Resume;

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
