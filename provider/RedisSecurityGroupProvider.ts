import { SecurityGroup } from "@pulumi/aws/ec2";
import { SecurityGroupProvider } from "./SecurityGroupProvider";

export class RedisSecurityGroupProvider implements SecurityGroupProvider {
    getInstance(): SecurityGroup {
        throw new Error("Method not implemented.");
    }
}