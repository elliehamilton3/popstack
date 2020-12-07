import {
  Model, Column, Table, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo,
} from 'sequelize-typescript';
import Resume from './Resume';

@Table
export default class Skill extends Model<Skill> {
  @Column
  name: string;

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
