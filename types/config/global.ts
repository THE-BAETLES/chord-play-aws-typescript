import { Region } from "@pulumi/aws";
export type GLOBAL_CONFIG_TYPE = {
    region: (typeof Region)[keyof typeof Region];
}