import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

export const PROGRESS_COMPONENT = "pkg:index:ProgressComponent";

export class ProgressComponent extends pulumi.ComponentResource {
    constructor(name, opts) {
        super(name,opts);

    }
}