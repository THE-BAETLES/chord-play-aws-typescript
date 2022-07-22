import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { SecurityGroupFactory } from "../services/security/SecurityGroupFactory";
export const REDIS_COMPONENT = "pkg:index:Rediscomponent"
export class RedisComponent extends pulumi.ComponentResource {
    constructor(name: string, opts: any) {
        super(REDIS_COMPONENT, name);
        const stackName = pulumi.getStack();
    }

}