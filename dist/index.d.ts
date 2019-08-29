declare class Logger {
    private category;
    constructor(category?: string);
    private log;
    fatal(message: string, ...params: any[]): void;
    error(message: string, ...params: any[]): void;
    warn(message: string, ...params: any[]): void;
    info(message: string, ...params: any[]): void;
    debug(message: string, ...params: any[]): void;
    trace(message: string, ...params: any[]): void;
    track(event: string, params: {
        [key: string]: any;
    }): void;
}
export declare const getLogger: (category?: string | undefined) => Logger;
export {};
