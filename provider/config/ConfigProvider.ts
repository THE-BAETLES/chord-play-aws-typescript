import dotenv from "dotenv"


export interface ConfigProvider<T> {
    getConfig(): T
}