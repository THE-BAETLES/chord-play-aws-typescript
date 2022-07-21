import dotenv from "dotenv"


export interface ConfigProvider {
    getConfig(): any
}