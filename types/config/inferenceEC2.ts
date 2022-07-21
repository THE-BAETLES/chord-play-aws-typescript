import { PORT } from "./port"

export type INFERENCE_EC2_CONFIG_TYPE = {
    ingress: {
        api: {
            port: PORT
        },
        ssh?: {
            port: PORT
        }
    }
    
}