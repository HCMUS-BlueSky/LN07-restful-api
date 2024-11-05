import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    UpdateDateColumn,
} from 'typeorm';


@Entity('inventory')
export class Inventory {
    @PrimaryGeneratedColumn({ type: 'mediumint', unsigned: true })
    inventory_id: number;

    @Column({ type: 'smallint', unsigned: true })
    film_id: number;

    @Column({ type: 'tinyint', unsigned: true })
    store_id: number;

    @UpdateDateColumn()
    last_update: Date;

}
