import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import {MongoComponent} from "./components/MongoComponent"
import { SecurityGroupFactory } from "./services/security/SecurityGroupFactory";
import { MongoSecurityGroup } from "./services/security/MongoSecurityGroup";

 
// Create an AWS resource (S3 Bucket)
// const bucket = new aws.s3.Bucket("my-bucket", {
//     website: {
//         indexDocument: "index.html"
//     }
// });

// Export the name of the bucket
// This information can see in cli using pulumi stack 

// export const bucketName = bucket.id;

// const bucketObject = new aws.s3.BucketObject("index.html", {
//     acl: "public-read",
//     contentType: "text/html",
//     bucket: bucket,
//     source: new pulumi.asset.FileAsset("index.html")
// });

// export const bucketEndpoint = pulumi.interpolate`http://${bucket.websiteEndpoint}`;

export const project = pulumi.getProject()
