import { PORT } from "./port"

export type MONGO_EC2_CONFIG_TYPE = {
    ingress: {
        dbConnection: {
            port: PORT
        }
        ssh?: {
            port: PORT
        }
    }
}