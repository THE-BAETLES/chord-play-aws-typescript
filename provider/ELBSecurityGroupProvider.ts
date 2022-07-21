import { SecurityGroup } from "@pulumi/aws/ec2";
import { SecurityGroupProvider } from "./SecurityGroupProvider";
import { SecurityGroupProviderFactory } from "./SecurityGroupProviderFactory";

export class ELBSecurityGroupProvider implements SecurityGroupProvider{
    getInstance(): SecurityGroup {
        throw new Error("Method not implemented.");
    }

}