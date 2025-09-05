// 様々なインポート方法の例
import UserService from "./api.js";
import { formatUser, validateEmail, loadApiModule } from "./utils.js";
import type { User, ApiResponse } from "./api.js";

async function demonstrateESM(): Promise<void> {
  console.log("=== ES Modules Demo ===\n");

  // サービスクラスの使用
  const userService = new UserService();

  console.log("📊 アクティブユーザー取得中...");
  const activeUsers = await userService.getActiveUsers();
  activeUsers.forEach((user) => {
    console.log(`  ${formatUser(user)}`);
  });

  console.log("\n👤 特定ユーザー情報取得中...");
  const userProfile = await userService.getUserProfile(2);
  if (userProfile) {
    console.log(`  ${formatUser(userProfile)}`);
  }

  console.log("\n📧 メールアドレス検証テスト:");
  const testEmails = [
    "valid@example.com",
    "invalid-email",
    "test@domain.co.jp",
  ];
  testEmails.forEach((email) => {
    const isValid = validateEmail(email);
    console.log(`  ${email}: ${isValid ? "✅ 有効" : "❌ 無効"}`);
  });

  console.log("\n🔄 動的インポートのテスト:");
  const apiModule = await loadApiModule();
  const response: ApiResponse<User[]> = await apiModule.fetchUsers();
  if (response.success && response.data) {
    console.log(
      `  動的インポートで ${response.data.length} 人のユーザーを取得`
    );
  }

  console.log("\n✅ ES Modules Demo 完了");
}

// トップレベルawaitの使用（ESMの特徴）
await demonstrateESM();
