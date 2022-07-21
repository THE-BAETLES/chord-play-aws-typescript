import { SecurityGroup } from "@pulumi/aws/ec2";
import { SecurityGroupProvider } from "./SecurityGroupProvider";
import { SecurityGroupArgs } from "@pulumi/aws/ec2";

export class InferenceSecurityGroupProvider implements SecurityGroupProvider {
    private inferenceSecurityGroupArgs = {
          
    }
    constructor(){}
    getInstance(): SecurityGroup {
        throw new Error("Method not implemented.");
    }

}