## VS Code Extension for Debug Support for MetaWare® ARC 

This extension for Visual Studio Code (VS Code) enables MetaWare® ARC Debugger with Visual Studio Code Debugger GUI.


## Get started

https://github.com/foss-for-synopsys-dwc-arc-processors/metaware-arc-debug

Start using this VS Code extension with guide below:
1. download and install VS Code.
2. go to Extensions Tab - install Microsoft C/C++ extension first. 
3. go to Extension Tab - button "Views and More Actions..." - "Install from VSIX..." to manually install this VSIX file.
4. reload VS Code from cmd shell to inherit MetaWare toolchain setup. 
5. into the demo Folder helloworld, update helloworld/.vscode/launch.json file preperly, then go to Run and Debug Tab - select configuration "justin working", start debugging ARC ELF file helloworld.exe 


## Working in progressing

Note that this feature is available for LLDB engine at the Windows* target platform now.

## Prepare Launch Configuration

This extension enables the ability to prepare launch configurations for running
and debugging binary ELF file created using MetaWare ARC toolset.

The configuration is now available to debug and run using the MetaWare debugger. You can find it in .vscode/launch.json. To debug and run, click on the **Run** icon.

Note that you can modify the configuration manually. For example, you may need to change:

* `"args"` - An array of arguments to be passed to your app by the debugger.
* `"stopAtEntry"` - Setting to "true" forces a break on your main() function. Default value is false.
* `"cwd"` - Sets the working directory of the application launched by the debugger.
* `"environment"` - Environment variables to add to the environment for the program.


More information about all the `launch.json` features can be found at [Configuring C/C++ debugging](https://code.visualstudio.com/docs/cpp/launch-json-reference).


## Troubleshooting


## For Developer for VS Code extension 

the repo is https://github.com/foss-for-synopsys-dwc-arc-processors/metaware-arc-debug

Install Visual Studio Code and open this project within it. You also need `npm and vsce`.
- Switch to project root folder.
- new PowerShell, import MetaWare toolchain setup script. 
- in the PowerShell, - Set-ExecutionPolicy RemoteSigned -Scope CurrentUser    //to enable VSCode permission 
- `code .`
- in the Terminal View, - npm install
- in the Terminal View, - vsce package    //to build and generate VSIX extension file. 

At this point you should be able to install VSIX into VSCode itself by below steps,

go to Extension Tab - button "Views and More Actions..." - "Install from VSIX..." to manually install this VSIX file.
