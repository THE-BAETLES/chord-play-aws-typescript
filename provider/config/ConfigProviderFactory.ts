import { ConfigProvider } from "./ConfigProvider";

export class ConfigProviderFactory {
    static getConfig<T extends ConfigProvider>(type: {new(): T}): T{
        return new type()
    }

}