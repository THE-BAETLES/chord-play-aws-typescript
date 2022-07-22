import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { KeyPair, SecurityGroup } from "@pulumi/aws/ec2";
import { InstanceArgs } from "@pulumi/aws/ec2";
import { SecurityGroupFactory } from "../services/security/SecurityGroupFactory";
import { MongoSecurityGroup } from "../services/security/MongoSecurityGroup";
import { CustomSecurityGroup } from "../services/security/CustomSecurityGroup";

export class MongoComponent extends pulumi.ComponentResource {
    constructor(name: string, opts: any) {
        super("pkg:index:MongoComponent", name);
        const stackName = pulumi.getStack();
        const securtiyGroup: SecurityGroup = SecurityGroupFactory.getSecurityGroup(MongoSecurityGroup);
        
        const userData = `
        !bin/bash
        sudo service mongod start
        `
        
        const instance = new aws.ec2.Instance(`chord-play-mongo-${stackName}`,{
            instanceType: "t2.small",
            ami: "chord-play-mongo",
            vpcSecurityGroupIds: [securtiyGroup.id],
            userData: userData
        }, ...opts);
    }

}