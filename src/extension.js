const vscode = require('vscode');

function activate(context) {
    // 注册菜单项
    const commandVer = vscode.commands.registerCommand('vsmarketplace-badges.ver', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString();

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    const commandVerS = vscode.commands.registerCommand('vsmarketplace-badges.ver-s', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString();

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    const commandInstl = vscode.commands.registerCommand('vsmarketplace-badges.instl', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString();

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    const commandInstlS = vscode.commands.registerCommand('vsmarketplace-badges.instl-s', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString();

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    const commandDld = vscode.commands.registerCommand('vsmarketplace-badges.dld', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString();

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    const commandDldS = vscode.commands.registerCommand('vsmarketplace-badges.dld-s', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString();

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    const commandRate = vscode.commands.registerCommand('vsmarketplace-badges.rate', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString();

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    const commandRateS = vscode.commands.registerCommand('vsmarketplace-badges.rate-s', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString();

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    const commandRateSt = vscode.commands.registerCommand('vsmarketplace-badges.rate-st', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString();

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    const commandTrd = vscode.commands.registerCommand('vsmarketplace-badges.trd', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString();

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    const commandTrw = vscode.commands.registerCommand('vsmarketplace-badges.trw', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString();

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    const commandTrm = vscode.commands.registerCommand('vsmarketplace-badges.trm', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString();

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    // 将菜单项注册到订阅数组中
    context.subscriptions.concat(commandVer, commandVerS, commandInstl, commandInstlS, commandDld, commandDldS, commandRate, commandRateS, commandRateSt, commandTrd, commandTrw, commandTrm);
}

exports.activate = activate;
