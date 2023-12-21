import { VSBrowser } from "vscode-extension-tester";
import { TestFunctions } from "./utils/TestFunctions";
describe("Basic UI tests", () => {
    let browser: VSBrowser;
    const expectedNotifications: Record<string, INotification> = {
        c_cppExt: {
            name: "C/C++",
            message : "No extension for C/C++ was found. Please install it.",
            installButton : "Install C/C++ Extension"
        },

    };
    
    before(async function() {
        browser = VSBrowser.instance;
        await browser.openResources("../array-transform", "../array-transform/src/array-transform.cpp");
    });
    after(async function() {
        await TestFunctions.UninstallAllExtensions();
    });
    describe("Generate tasks", () => {
        it("Install 'C/C++' extension", async function() {
            this.timeout(10 * 1000);
            await TestFunctions.InstallExtensionFromNotificationTest(expectedNotifications.c_cppExt);
        });


    });
});