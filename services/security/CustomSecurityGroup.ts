import { SecurityGroup } from "@pulumi/aws/ec2";

export interface CustomSecurityGroup{
    getInstance(): SecurityGroup
}