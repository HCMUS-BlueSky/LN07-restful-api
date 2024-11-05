import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    UpdateDateColumn,
} from 'typeorm';


@Entity('rental')
export class Rental {
    @PrimaryGeneratedColumn()
    rental_id: number;

    @Column({ type: 'datetime' })
    rental_date: Date;

    @Column({ type: 'mediumint', unsigned: true })
    inventory_id: number;

    @Column({ type: 'smallint', unsigned: true })
    customer_id: number;

    @Column({ type: 'datetime', nullable: true })
    return_date: Date;

    @Column({ type: 'tinyint', unsigned: true })
    staff_id: number;

    @UpdateDateColumn()
    last_update: Date;
}
