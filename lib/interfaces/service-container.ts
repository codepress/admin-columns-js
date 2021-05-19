export interface ServiceContainer {
    getService<T = any>(name: string): T

    hasService(name: string): boolean

    registerService(name: string, service: any): this
}