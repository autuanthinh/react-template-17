class SessionStorageAdapter {
    setItem(key: string, value: string): void {
        sessionStorage.setItem(key, value);
    }

    getItem(key: string): string | null {
        return sessionStorage.getItem(key);
    }

    getItemJson(key: string): any {
        const value: any = sessionStorage.getItem(key);
        return JSON.parse(value);
    }

    setItemJson(key: string, value: any): void {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    removeItem(key: string): void {
        return sessionStorage.removeItem(key);
    }
}

export default new SessionStorageAdapter();
