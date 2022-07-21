export type REDIS_EC2_CONFIG_TYPE = {
    ingress: {
        dbConnection: {
            port: {
                to: number;
                from: number;
            }
        }
        ssh: {
            port: {
                to: number;
                from: number;
            }
        }
    }
}