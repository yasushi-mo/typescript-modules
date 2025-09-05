// 型定義
export interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// ユーザーデータのモック
const mockUsers: User[] = [
  { id: 1, name: "田中太郎", email: "tanaka@example.com", isActive: true },
  { id: 2, name: "佐藤花子", email: "sato@example.com", isActive: false },
  { id: 3, name: "鈴木次郎", email: "suzuki@example.com", isActive: true },
];

// API関数
export async function fetchUsers(): Promise<ApiResponse<User[]>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: mockUsers,
      });
    }, 1000);
  });
}

export async function fetchUserById(id: number): Promise<ApiResponse<User>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = mockUsers.find((u) => u.id === id);
      if (user) {
        resolve({
          success: true,
          data: user,
        });
      } else {
        resolve({
          success: false,
          error: `User with id ${id} not found`,
        });
      }
    }, 500);
  });
}

// Default Export
export default class UserService {
  async getActiveUsers(): Promise<User[]> {
    const response = await fetchUsers();
    if (response.success && response.data) {
      return response.data.filter((user) => user.isActive);
    }
    return [];
  }

  async getUserProfile(id: number): Promise<User | null> {
    const response = await fetchUserById(id);
    return response.success && response.data ? response.data : null;
  }
}
