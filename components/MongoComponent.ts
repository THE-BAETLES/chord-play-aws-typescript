import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { KeyPair, SecurityGroup } from "@pulumi/aws/ec2";
import { SecurityGroupFactory } from "../services/security/SecurityGroupFactory";
import { MongoSecurityGroup } from "../services/security/MongoSecurityGroup";

export const START_MONGO_SERVICE = `
        #!bin/bash
        sudo service mongod start
        `
export const MONGO_COMPONENT = "pkg:index:Mongocomponent";

export class MongoComponent extends pulumi.ComponentResource {
    constructor(name: string, opts: any) {
        super(MONGO_COMPONENT, name);
        const stackName = pulumi.getStack();
        const securityGroup: SecurityGroup = SecurityGroupFactory.getSecurityGroup(MongoSecurityGroup);
        const userData = START_MONGO_SERVICE
        const instance = new aws.ec2.Instance(`chord-play-mongo-${stackName}`,{
            tags: {
                Name: `chord-play-mongo-db-${stackName}`
            },
            instanceType: "t2.small",
            ami: "ami-07405dd2e31f0683a",
            vpcSecurityGroupIds: [securityGroup.id],
            userData: userData
        }, opts);
    }

}