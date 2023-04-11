const vscode = require('vscode');

function activate(context) {
    // 显示菜单
    const commandShowSubMenu = vscode.commands.registerCommand('vsmarketplace-badges.showSubMenu', () => {
        // 获取当前编辑器上下文
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        
        // 展开右拉下一级菜单
        vscode.commands.executeCommand('editor.action.showContextMenu', {
            x: editor.visibleRanges[0].end.character,
            y: editor.visibleRanges[0].end.line
        });
    });
    
    // 注册菜单项
    const commandVer = vscode.commands.registerCommand('vsmarketplace-badges.ver', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        // 获取代码片段
        const languageId = vscode.window.activeTextEditor?.document.languageId;
        var snippet;

        if (languageId == 'markdown') {
            snippet = new vscode.SnippetString("[![Version](https://vsmarketplacebadges.dev/version/${1:publishername.extensionname}.svg)](https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname})");
        } else {
            snippet = new vscode.SnippetString("<a href=\"https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname}\">",
            "\t<img src=\"https://vsmarketplacebadges.dev/version/${1:publishername.extensionname}.svg\" alt=\"Version\">",
            "</a>");
        }

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
        const languageId = vscode.window.activeTextEditor?.document.languageId;
        var snippet;

        if (languageId == 'markdown') {
            snippet = new vscode.SnippetString("[![Version Short](https://vsmarketplacebadges.dev/version-short/${1:publishername.extensionname}.svg)](https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname})");
        } else {
            snippet = new vscode.SnippetString("<a href=\"https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname}\">",
            "\t<img src=\"https://vsmarketplacebadges.dev/version-short/${1:publishername.extensionname}.svg\" alt=\"Version Short\">",
            "</a>");
        }

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
        const languageId = vscode.window.activeTextEditor?.document.languageId;
        var snippet;

        if (languageId == 'markdown') {
            snippet = new vscode.SnippetString("[![Installs](https://vsmarketplacebadges.dev/installs/${1:publishername.extensionname}.svg)](https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname})");
        } else {
            snippet = new vscode.SnippetString("<a href=\"https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname}\">",
            "\t<img src=\"https://vsmarketplacebadges.dev/installs/${1:publishername.extensionname}.svg\" alt=\"Installs\">",
            "</a>");
        }

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
        const languageId = vscode.window.activeTextEditor?.document.languageId;
        var snippet;

        if (languageId == 'markdown') {
            snippet = new vscode.SnippetString("[![Installs Short](https://vsmarketplacebadges.dev/installs-short/${1:publishername.extensionname}.svg)](https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname})");
        } else {
            snippet = new vscode.SnippetString("<a href=\"https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname}\">",
            "\t<img src=\"https://vsmarketplacebadges.dev/installs-short/${1:publishername.extensionname}.svg\" alt=\"Installs Short\">",
            "</a>");
        }

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
        const languageId = vscode.window.activeTextEditor?.document.languageId;
        var snippet;

        if (languageId == 'markdown') {
            snippet = new vscode.SnippetString("[![Downloads](https://vsmarketplacebadges.dev/downloads/${1:publishername.extensionname}.svg)](https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname})");
        } else {
            snippet = new vscode.SnippetString("<a href=\"https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname}\">",
            "\t<img src=\"https://vsmarketplacebadges.dev/downloads/${1:publishername.extensionname}.svg\" alt=\"Downloads\">",
            "</a>");
        }

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
        const languageId = vscode.window.activeTextEditor?.document.languageId;
        var snippet;

        if (languageId == 'markdown') {
            snippet = new vscode.SnippetString("[![Downloads Short](https://vsmarketplacebadges.dev/downloads-short/${1:publishername.extensionname}.svg)](https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname})");
        } else {
            snippet = new vscode.SnippetString("<a href=\"https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname}\">",
            "\t<img src=\"https://vsmarketplacebadges.dev/downloads-short/${1:publishername.extensionname}.svg\" alt=\"Downloads Short\">",
            "</a>");
        }

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
        const languageId = vscode.window.activeTextEditor?.document.languageId;
        var snippet;

        if (languageId == 'markdown') {
            snippet = new vscode.SnippetString("[![Rating](https://vsmarketplacebadges.dev/rating/${1:publishername.extensionname}.svg)](https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname})");
        } else {
            snippet = new vscode.SnippetString("<a href=\"https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname}\">",
            "\t<img src=\"https://vsmarketplacebadges.dev/rating/${1:publishername.extensionname}.svg\" alt=\"Rating\">",
            "</a>");
        }

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
        const languageId = vscode.window.activeTextEditor?.document.languageId;
        var snippet;

        if (languageId == 'markdown') {
            snippet = new vscode.SnippetString("[![Rating Short](https://vsmarketplacebadges.dev/rating-short/${1:publishername.extensionname}.svg)](https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname})");
        } else {
            snippet = new vscode.SnippetString("<a href=\"https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname}\">",
            "\t<img src=\"https://vsmarketplacebadges.dev/rating-short/${1:publishername.extensionname}.svg\" alt=\"Rating\">",
            "</a>");
        }

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
        const languageId = vscode.window.activeTextEditor?.document.languageId;
        var snippet;

        if (languageId == 'markdown') {
            snippet = new vscode.SnippetString("[![Rating Star](https://vsmarketplacebadges.dev/rating-star/${1:publishername.extensionname}.svg)](https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname})");
        } else {
            snippet = new vscode.SnippetString("<a href=\"https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname}\">",
            "\t<img src=\"https://vsmarketplacebadges.dev/rating-star/${1:publishername.extensionname}.svg\" alt=\"Rating Short\">",
            "</a>");
        }

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
        const languageId = vscode.window.activeTextEditor?.document.languageId;
        var snippet;

        if (languageId == 'markdown') {
            const snippet = new vscode.SnippetString("[![TrendingDaily](https://vsmarketplacebadges.dev/trending-daily/${1:publishername.extensionname}.svg)](https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname})");
        } else {
            const snippet = new vscode.SnippetString("<a href=\"https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname}\">",
            "\t<img src=\"https://vsmarketplacebadges.dev/trending-daily/${1:publishername.extensionname}.svg\" alt=\"TrendingDaily\">",
            "</a>");
        }

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
        const languageId = vscode.window.activeTextEditor?.document.languageId;
        var snippet;

        if (languageId == 'markdown') {
            snippet = new vscode.SnippetString("[![TrendingWeekly](https://vsmarketplacebadges.dev/trending-weekly/${1:publishername.extensionname}.svg)](https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname})");
        } else {
            snippet = new vscode.SnippetString("<a href=\"https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname}\">",
            "\t<img src=\"https://vsmarketplacebadges.dev/trending-weekly/${1:publishername.extensionname}.svg\" alt=\"TrendingWeekly\">",
            "</a>");
        }

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
        const languageId = vscode.window.activeTextEditor?.document.languageId;
        var snippet;

        if (languageId == 'markdown') {
            snippet = new vscode.SnippetString("[![TrendingMonthly](https://vsmarketplacebadges.dev/trending-monthly/${1:publishername.extensionname}.svg)](https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname})");
        } else {
            snippet = new vscode.SnippetString("<a href=\"https://marketplace.visualstudio.com/items?itemName=${1:publishername.extensionname}\">",
            "\t<img src=\"https://vsmarketplacebadges.dev/trending-monthly/${1:publishername.extensionname}.svg\" alt=\"TrendingMonthly\">",
            "</a>");
        }

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    // 将菜单项注册到订阅数组中
    context.subscriptions.concat(commandVer, commandVerS, commandInstl, commandInstlS, commandDld, commandDldS, commandRate, commandRateS, commandRateSt, commandTrd, commandTrw, commandTrm);
}

exports.activate = activate;
