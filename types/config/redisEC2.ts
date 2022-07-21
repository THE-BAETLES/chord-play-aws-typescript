export type RedisConfigType = {
    ingress: {
        dbconnection: {
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