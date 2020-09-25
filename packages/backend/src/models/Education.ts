import {
  Model, Column, Table, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo,
} from 'sequelize-typescript';
import Resume from './Resume';

@Table
export default class Education extends Model<Education> {
  @Column
  place: string;

  @Column
  info: string;

  @Column
  yearFrom: number;

  @Column
  yearTo: number;

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
