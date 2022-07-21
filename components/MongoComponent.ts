import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { InstanceArgs } from "@pulumi/aws/connect";
import * as awsx from "@pulumi/awsx";

export class MongoComponent extends pulumi.ComponentResource {
    constructor(name: string, opts: any) {
        super("pkg:index:MongoComponent", name);
        const stackName = pulumi.getStack();
        const mongoEC2 = new aws.ec2.Instance(`chord-play-mongo-${stackName}`,{
            instanceType: "",
            ami: "ami",
        }, ...opts);
    }
}