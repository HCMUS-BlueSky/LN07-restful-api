import {
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';


@Entity('film_category')
export class FilmCategory {
    @PrimaryColumn({ type: 'smallint', unsigned: true })
    film_id: number;

    @PrimaryColumn({ type: 'tinyint', unsigned: true })
    category_id: number;

    @UpdateDateColumn()
    last_update: Date;

}
