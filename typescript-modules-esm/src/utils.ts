import { User } from "./api.js";

// 再エクスポート
export { User, ApiResponse } from "./api.js";

// 独自のユーティリティ関数
export const formatUser = (user: User): string => {
  const status = user.isActive ? "✅ アクティブ" : "❌ 非アクティブ";
  return `${user.name} (${user.email}) - ${status}`;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 動的インポート用の関数
export const loadApiModule = async () => {
  const apiModule = await import("./api.js");
  return apiModule;
};
