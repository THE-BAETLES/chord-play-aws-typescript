import { SecurityGroup } from "@pulumi/aws/ec2";
import { CustomSecurityGroup } from "./CustomSecurityGroup";
export class SecurityGroupFactory {
    // new () describes constructor signature in typescript
    static getSecurityGroup<T extends CustomSecurityGroup>(securityType: {new(): T}): SecurityGroup {
        return new securityType().getInstance();
    }
}