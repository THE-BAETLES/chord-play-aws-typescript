export type MONGO_EC2_CONFIG_TYPE = {
    ingress: {
        dbConnection: {
            port: {
                from : number;
                to: number;
            }
        }
        ssh: {
            port: {
                from: number;
                to: number;
            }
        }
    }
}