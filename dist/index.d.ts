declare class Logger {
    category: string | null;
    constructor(category?: string);
    private log;
    fatal(message: string, ...parameters: any[]): void;
    error(message: string, ...parameters: any[]): void;
    warn(message: string, ...parameters: any[]): void;
    info(message: string, ...parameters: any[]): void;
    debug(message: string, ...parameters: any[]): void;
    trace(message: string, ...parameters: any[]): void;
}
export declare const getLogger: (category?: string | undefined) => Logger;
export {};
