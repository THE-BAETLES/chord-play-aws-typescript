import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { SecurityGroupFactory } from "../services/security/SecurityGroupFactory";
import { RedisSecurityGroup } from "../services/security/RedisSecurityGroup";
export const START_REDIS_SERVICE = `
    #!bin/bash
    sudo service mongod start
`
export const REDIS_COMPONENT = "pkg:index:Rediscomponent"

export class RedisComponent extends pulumi.ComponentResource {
    constructor(name: string, opts: any) {
        super(REDIS_COMPONENT, name);
        const stackName = pulumi.getStack();
        const securityGroup = SecurityGroupFactory.getSecurityGroup(RedisSecurityGroup);
        const userData = START_REDIS_SERVICE
        
        const instance = new aws.ec2.Instance(`chord-play-progress-redis-${stackName}`,{
            tags: {
                Name: `chord-play-progress-redis-${stackName}`
            },
            instanceType: "t2.small",
            ami: "ami-09884b1892882c41d",
            vpcSecurityGroupIds: [securityGroup.id],
            userData: userData
        }, opts);

    }

}