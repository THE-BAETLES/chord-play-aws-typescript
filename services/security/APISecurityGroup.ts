import { SecurityGroup } from "@pulumi/aws/ec2";
import {CustomSecurityGroup} from "./CustomSecurityGroup"

export class APISecurityGroup implements CustomSecurityGroup {
    getInstance(): SecurityGroup {
        throw new Error("Method not implemented.");
    }
    
}