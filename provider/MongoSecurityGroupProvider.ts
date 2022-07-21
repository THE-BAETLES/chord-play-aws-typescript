import { SecurityGroup } from "@pulumi/aws/ec2";
import { SecurityGroupProvider } from "./SecurityGroupProvider";
import { SecurityGroupArgs } from "@pulumi/aws/ec2";

export class MongoSecurityGroupProvider implements SecurityGroupProvider {
    private securityGroupArgs: SecurityGroupArgs
    constructor(){
        this.securityGroupArgs = {
            ingress: [{
                fromPort: Number("27017"),
                toPort: Number("27017"),
                protocol: "tcp",
            }]
        }
    }
    getInstance(): SecurityGroup {
        return new SecurityGroup("mongo-security-group", {

        } )
    }
}