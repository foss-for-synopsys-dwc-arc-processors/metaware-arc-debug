import * as assert from "assert";
import { after } from "mocha";

import * as vscode from "vscode";

suite("Extension Test Suite", () => {
    vscode.window.showInformationMessage("Extension test started!");

    after(() => {
        vscode.window.showInformationMessage("Extension tests done!");
    });


});
