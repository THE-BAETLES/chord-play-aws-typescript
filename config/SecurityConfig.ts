import { INFERENCE_EC2_CONFIG_TYPE } from "../types/config/inferenceEC2";
import { MONGO_EC2_CONFIG_TYPE } from "../types/config/mongoEC2";
import { REDIS_EC2_CONFIG_TYPE } from "../types/config/redisEC2";
import { API_EC2_CONFIG_TYPE } from "../types/config/apiEC2";
import { API_ELB_CONFIG_TYPE } from "../types/config/apiELB";
import { INFERENCE_SQS_CONFIG_TYPE } from "../types/config/inferenceSQS";
import { Config } from "./Config";

export type SecurityConfigProviderType = {
    inferenceEC2?: INFERENCE_EC2_CONFIG_TYPE;
    mongoEC2?: MONGO_EC2_CONFIG_TYPE;
    redisEC2?: REDIS_EC2_CONFIG_TYPE;
    apiEC2?: API_EC2_CONFIG_TYPE;
    apiELB?: API_ELB_CONFIG_TYPE;
    inferenceSQS?: INFERENCE_SQS_CONFIG_TYPE
}

export class SecurityConfig implements Config<SecurityConfigProviderType> {
    getConfig() {
        return {
            inferenceEC2: {
                ingress: {
                    api: {
                        port: {
                            to: 123,
                            from: 123
                        }
                    }
                }
            },
            mongoEC2: {
                ingress: {
                    dbConnection: {
                        port: {
                            to: 123,
                            from: 123
                        }
                    }
                }
            }
        }
    }
}