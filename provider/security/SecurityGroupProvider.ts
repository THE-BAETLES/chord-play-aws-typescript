import { SecurityGroup } from "@pulumi/aws/ec2";

export interface SecurityGroupProvider {
    getInstance(): SecurityGroup
}