import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";

@Entity()
export class Company {

    @ObjectIdColumn()
    company_id : ObjectID;

    @Column()
    name : string;

}
