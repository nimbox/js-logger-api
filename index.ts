declare const JSLOGGER: (category: string | null, level: number, message: string, ...params: any) => void;
declare const JSTRACKER: (category: string | null, event: string, params: { [key: string]: any }) => void;


class Logger {

    private category: string | null;

    constructor(category?: string) {
        this.category = category ? category : null;
    }

    private log(level: number, message: string, ...params: any[]) {
        if (JSLOGGER) {
            JSLOGGER(this.category, level, message, ...params);
        }
    }

    public fatal(message: string, ...params: any[]) {
        this.log(0, message, ...params);
    }
    public error(message: string, ...params: any[]) {
        this.log(1, message, ...params);
    }
    public warn(message: string, ...params: any[]) {
        this.log(2, message, ...params);
    }
    public info(message: string, ...params: any[]) {
        this.log(3, message, ...params);
    }
    public debug(message: string, ...params: any[]) {
        this.log(4, message, ...params);
    }
    public trace(message: string, ...params: any[]) {
        this.log(5, message, ...params);
    }

    public track(event: string, params: { [key: string]: any }) {
        if (JSTRACKER) {
            JSTRACKER(this.category, event, params);
        }
    }

}


export const getLogger = (category?: string) => new Logger(category);
