declare const JSLOGGER: (category: string | null, level: number, message: string, ...parameters: any[]) => void;


class Logger {

    category: string | null;

    constructor(category?: string) {
        this.category = category ? category : null;
    }

    private log(level: number, message: string, ...parameters: any[]) {
        if (JSLOGGER) {
            JSLOGGER(this.category, level, message, ...parameters);
        }
    }

    public fatal(message: string, ...parameters: any[]) {
        this.log(0, message, ...parameters);
    }
    public error(message: string, ...parameters: any[]) {
        this.log(0, message, ...parameters);
    }
    public warn(message: string, ...parameters: any[]) {
        this.log(0, message, ...parameters);
    }
    public info(message: string, ...parameters: any[]) {
        this.log(0, message, ...parameters);
    }
    public debug(message: string, ...parameters: any[]) {
        this.log(0, message, ...parameters);
    }
    public trace(message: string, ...parameters: any[]) {
        this.log(0, message, ...parameters);
    }

}


export const getLogger = (category?: string) => new Logger(category);
