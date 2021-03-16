import {Column, Entity} from "typeorm";
import { Company } from "./company";
import { Stakeholder } from "./stakeholder"


@Entity()
export class CompanyStakeholders {

    @Column( type => Company )
    company : Company;

    @Column( type => Stakeholder )
    stakeholder : Stakeholder;

    @Column()
    number_of_shares : number;


}
