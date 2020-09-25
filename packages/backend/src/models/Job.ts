import {
  Model, Column, Table, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo,
} from 'sequelize-typescript';
import Resume from './Resume';

@Table
export default class Job extends Model<Job> {
  @Column
  company: string;

  @Column
  title: string;

  @Column
  description: string;

  @Column
  location: string;

  @Column
  dateFrom: Date;

  @Column
  dateTo: Date;

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
