import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";


export class MongoComponent extends pulumi.ComponentResource {
    private _instance: aws.ec2.Instance;

    constructor(name: string, opts: any) {
        super("pkg:index:MongoComponent", name);
        const stackName = pulumi.getStack();
        const mongoEC2 = new aws.ec2.Instance(`chord-play-mongo-${stackName}`,{
            instanceType: "",
            ami: "ami",
        }, ...opts);
        this._instance = mongoEC2
    }

    getInstance() {
        return this._instance;
    }
}