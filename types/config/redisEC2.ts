export type RedisConfigType = {
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