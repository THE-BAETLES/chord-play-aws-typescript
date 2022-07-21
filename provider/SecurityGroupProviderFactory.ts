import { MongoSecurityGroupProvider } from "./MongoSecurityGroupProvider";
import { SecurityGroupProvider } from "./SecurityGroupProvider";
export class SecurityGroupProviderFactory {
    // new () describes constructor signature in typescript
    static getProvider<T extends SecurityGroupProvider>(securityType: {new (): T}): T{
        return new securityType();
    }
}
const test = SecurityGroupProviderFactory.getProvider(MongoSecurityGroupProvider)