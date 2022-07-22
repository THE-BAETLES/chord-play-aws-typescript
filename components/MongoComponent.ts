import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { KeyPair } from "@pulumi/aws/ec2";
import {SecurityGroupProviderFactory} from "../provider/security/SecurityGroupProviderFactory"
import { MongoSecurityGroupProvider } from "../provider/security/MongoSecurityGroupProvider";
import { InstanceArgs } from "@pulumi/aws/ec2";

export class MongoComponent extends pulumi.ComponentResource {
    constructor(name: string, opts: any) {
        super("pkg:index:MongoComponent", name);
        const stackName = pulumi.getStack();
        const mongoSecurityGroup = SecurityGroupProviderFactory.getProvider(MongoSecurityGroupProvider);
        const userData = `
        !bin/bash
        sudo service mongod start
        `
        const instance = new aws.ec2.Instance(`chord-play-mongo-${stackName}`,{
            instanceType: "t2.small",
            ami: "chord-play-mongo",
            vpcSecurityGroupIds: [mongoSecurityGroup.getInstance().vpcId],
            userData: userData
        }, ...opts);
    }

}