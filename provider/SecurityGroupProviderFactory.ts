
export type SecurityGroupType = "INFERENCE" | "API" | "PROGRESS_REDIS" | "MONGO" | "ELB_API" | "MQ_INFERENCE" | "MQ_RECOMMENDATION";
export class SecurityGroupProviderFactory {
    constructor() {}
    getProvider(type: SecurityGroupType){
        switch(type){
            case "INFERENCE":
                break;

            case "API":
                break;
            
            case "PROGRESS_REDIS":
                break;

            case "MONGO":
                break;
            
            case "ELB_API":
                break;

            case "MQ_INFERENCE":
                break;
            
            case "MQ_RECOMMENDATION":
                break;
        }
    }
}