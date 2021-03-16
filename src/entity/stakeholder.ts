import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";

@Entity()
export class Stakeholder {

    @ObjectIdColumn()
    stakeholder_id : ObjectID;

    @Column()
    name : string;

}
