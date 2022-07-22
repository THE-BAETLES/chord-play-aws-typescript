import dotenv from "dotenv"


export interface Config<T> {
    getConfig(): T
}