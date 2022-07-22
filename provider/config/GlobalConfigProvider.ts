import { ConfigProvider } from "./ConfigProvider";
import { GLOBAL_CONFIG_TYPE } from "../../types/config/global";
import { APNortheast2Region } from "@pulumi/aws";
export class GlobalConfigProvider implements ConfigProvider<GLOBAL_CONFIG_TYPE> {
    getConfig() {
       return {
           region: APNortheast2Region
       } 
    }
}