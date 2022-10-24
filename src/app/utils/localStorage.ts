const language = 'language';
class LocalStorageAdapter {
    setItem(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    getItem(key: string): string | null {
        return localStorage.getItem(key);
    }

    getItemJson(key: string): any {
        const value: any = localStorage.getItem(key);
        return JSON.parse(value);
    }

    setItemJson(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    // Language
    setLanguage(lang: string): void {
        this.setItem(language, lang);
    }
    getLang(): string | null {
        return this.getItem(language);
    }
}

export default new LocalStorageAdapter();
