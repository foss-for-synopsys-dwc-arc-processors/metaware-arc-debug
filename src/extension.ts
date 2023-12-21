
"use strict";
import * as vscode from "vscode";
import { LaunchConfigurator } from "./LaunchConfigurator";






 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function activate(context: vscode.ExtensionContext): void {

 
    if (process.platform == "darwin") {
        vscode.window.showWarningMessage("The macOS operating systems are not currently supported.");
    }




 

 


    // Register the commands that will interact with the user and write the launcher scripts.
 
    const launchConfigurator = new LaunchConfigurator();
 
    launchConfigurator.checkDebugger();
    if (vscode.workspace.workspaceFolders) {
        launchConfigurator.checkLaunchConfig();
    }
    context.subscriptions.push(vscode.commands.registerCommand("MetaWare.launchConfigurator.generateLaunchJson", () => launchConfigurator.makeLaunchFile()));


 

 

 


 
    const tsExtension = vscode.extensions.getExtension("ms-vscode.cpptools");
 
    if (!tsExtension) {
        const GoToInstall = "Install C/C++ Extension";
 
        vscode.window.showInformationMessage("No extension for C/C++ was found. Please install it.", GoToInstall)
            .then((selection) => {
                if (selection === GoToInstall) {
                    vscode.commands.executeCommand("workbench.extensions.installExtension", "ms-vscode.cpptools");
                }
            });
    }
}
 