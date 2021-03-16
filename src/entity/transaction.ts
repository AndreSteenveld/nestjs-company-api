import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";
import { State } from "./state";

@Entity()
export class Transaction {

    @ObjectIdColumn()
    transaction_id : ObjectID;

    @Column()
    previous_transaction : ObjectID | null;

    @Column()
    timestamp : Date;

    @Column()
    company_id : ObjectID;

    @Column()
    recipient_id : ObjectID | null;

    @Column()
    contributor_id : ObjectID | null;

    @Column()
    number_of_shares : number;

    @Column( type => State )
    state : State[];

}
