import { SecurityGroup } from "@pulumi/aws/ec2";
import { SecurityGroupArgs } from "@pulumi/aws/ec2";
import { CustomSecurityGroup } from "./CustomSecurityGroup";
export class MongoSecurityGroup implements CustomSecurityGroup {
    private securityGroupArgs: SecurityGroupArgs
    
    constructor(){
        this.securityGroupArgs = {
            tags: {
                Name: "chord-play-mongo-database"
            },
            ingress: [{
                fromPort: Number("27017"),
                toPort: Number("27017"),
                protocol: "tcp",
            },{
                fromPort: Number("22"),
                toPort: Number("22"),
                protocol: "tcp"
            }]
        }
    }

    getInstance(): SecurityGroup {
        return new SecurityGroup("mongo-security-group", this.securityGroupArgs)
    }
}