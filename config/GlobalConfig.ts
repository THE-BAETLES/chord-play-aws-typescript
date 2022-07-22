import { GLOBAL_CONFIG_TYPE } from "../types/config/global";
import { APNortheast2Region } from "@pulumi/aws";
import { Config } from "./Config";
export class GlobalConfig implements Config<GLOBAL_CONFIG_TYPE> {
    getConfig() {
       return {
           region: APNortheast2Region
       } 
    }
}