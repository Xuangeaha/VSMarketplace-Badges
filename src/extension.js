const vscode = require('vscode');

function activate(context) {
    // 注册菜单项
    const addBadgesCommand = vscode.commands.registerCommand('vsmarketplacebadges.addbadges', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        // 获取代码片段
        var snippet;

        if (vscode.window.activeTextEditor.document.languageId == 'markdown') {
            snippet = new vscode.SnippetString("[![${1:badge_title}](https://vsmarketplacebadges.dev/${1:badge_title}/${2:publishername.extensionname}.svg)](https://marketplace.visualstudio.com/items?itemName=${2:publishername.extensionname})")
        } else {
            snippet = new vscode.SnippetString(`<a href=\"https://marketplace.visualstudio.com/items?itemName=\${2:publishername.extensionname}\">
\t<img src=\"https://vsmarketplacebadges.dev/\${1:badge_title}/\${2:publishername.extensionname}.svg\" alt=\"\${1:badge_title}\">
</a>`);}

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    // 将菜单项注册到订阅数组中
    context.subscriptions.push(addBadgesCommand);
}

exports.activate = activate;
