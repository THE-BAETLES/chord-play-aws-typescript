import { SecurityGroup } from "@pulumi/aws/ec2";
import { SecurityGroupArgs } from "@pulumi/aws/ec2";
import { CustomSecurityGroup } from "./CustomSecurityGroup";

export const MONGO_SECURITY_GROUP_TAG = "chord-play-mongo-database"
export const MONGO_SECURITY_GROUP_NAME = "mongo-security-group"
export class MongoSecurityGroup implements CustomSecurityGroup {
    private securityGroupArgs: SecurityGroupArgs
    constructor(){
        this.securityGroupArgs = {
            description: MONGO_SECURITY_GROUP_TAG,

            tags: {
                Name: MONGO_SECURITY_GROUP_TAG
            },
            ingress: [{
                cidrBlocks: ["0.0.0.0/0"],
                fromPort: 27017,
                toPort: 27017,
                protocol: "tcp",
            },{
                cidrBlocks: ["0.0.0.0/0"],
                fromPort:22,
                toPort:22,
                protocol: "tcp"
            }]
        }
    }

    getInstance(): SecurityGroup {
        return new SecurityGroup(MONGO_SECURITY_GROUP_NAME, this.securityGroupArgs, {});
    }
}