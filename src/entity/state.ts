import {ObjectID, Column} from "typeorm";

@Entity()
export class State {

    @Column()
    stakeholder_id : ObjectID;

    @Column()
    number_of_shares : number;

}
