import { commands, window, debug } from "vscode";
import type { ExtensionContext } from "vscode";
export function activate(context: ExtensionContext) {
  const Hello = commands.registerCommand("helloworld", () => {
    window.showInformationMessage("你好世界");
  });
  // Add command to the extension context
  context.subscriptions.push(Hello);
}
