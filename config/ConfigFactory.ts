import { Config } from "./Config";

export class ConfigFactory {
    static getConfig<T extends Config<T>>(type: {new(): T}): T{
        return new type()
    }
}