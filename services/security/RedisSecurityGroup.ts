import { SecurityGroup, SecurityGroupArgs } from "@pulumi/aws/ec2";
import { CustomSecurityGroup } from "./CustomSecurityGroup";

export const REDIS_SECURITY_GROUP_TAG = "chord-play-progress-redis"
export const REDIS_SECURITY_GROUP_NAME = "progress-redis-group"
export class RedisSecurityGroup implements CustomSecurityGroup {
    private securityGroupArgs: SecurityGroupArgs
    constructor(){
        this.securityGroupArgs = {
            description: REDIS_SECURITY_GROUP_TAG,
            tags: {
                Name: REDIS_SECURITY_GROUP_TAG
            },
            ingress: [{
                cidrBlocks: ["0.0.0.0/0"],
                fromPort: 6379,
                toPort: 6379,
                protocol: "tcp",
            }]
        }
    }


    getInstance(): SecurityGroup {
        return new SecurityGroup(REDIS_SECURITY_GROUP_NAME, this.securityGroupArgs)
    }
}