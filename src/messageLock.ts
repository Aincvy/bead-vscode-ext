// 创建一个消息锁管理器
class MessageLockManager {
    private locks: Map<string, NodeJS.Timeout> = new Map();

    // 设置锁，返回是否成功设置（如果已有锁则返回false）
    setLock(messageId: string, timeoutMs: number = 2000): boolean {
        // 如果已经存在锁，则跳过
        if (this.locks.has(messageId)) {
            return false;
        }

        // 设置锁，并在指定时间后自动清除
        const timeoutHandle = setTimeout(() => {
            this.clearLock(messageId);
        }, timeoutMs);

        this.locks.set(messageId, timeoutHandle);
        return true;
    }

    // 手动清除锁
    clearLock(messageId: string): void {
        const timeoutHandle = this.locks.get(messageId);
        if (timeoutHandle) {
            clearTimeout(timeoutHandle);
            this.locks.delete(messageId);
        }
    }

    // 检查是否有锁
    hasLock(messageId: string): boolean {
        return this.locks.has(messageId);
    }
}

// 创建单例
const messageLockManager = new MessageLockManager();
export default messageLockManager;

