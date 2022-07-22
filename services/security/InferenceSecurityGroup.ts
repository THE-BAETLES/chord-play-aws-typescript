import { SecurityGroup } from "@pulumi/aws/ec2";
import { SecurityGroupArgs } from "@pulumi/aws/ec2";
import { CustomSecurityGroup } from "./CustomSecurityGroup";

export class InferenceSecurityGroup implements CustomSecurityGroup {
    private inferenceSecurityGroupArgs = {
          
    }
    constructor(){}
    getInstance(): SecurityGroup {
        throw new Error("Method not implemented.");
    }

}