## VS Code Extension for Debug Support for MetaWare® ARC 

This extension for Visual Studio Code (VS Code) enables
additional features of GDB for MetaWare® ARC.

## Get started
Start using this VS Code extension with guide below:
1. download and install VS Code.
2. go to Extensions Tab - install Microsoft C/C++ extension first. 
3. go to Extension Tab - button "Views and More Actions..." - "Install from VSIX..." to manually install this VSIX file.
4. reload VS Code.

## Prepare Launch Configuration
Note that this feature is only available for the Linux* target platform.

This extension enables the ability to prepare launch configurations for running
and debugging binary ELF file created using MetaWare ARC toolset.

The configuration is now available to debug and run using the MetaWare debugger. You can find it in .vscode/launch.json. To debug and run, click on the **Run** icon.

Note that you can modify the configuration manually. For example, you may need to change:

* `"args"` - An array of arguments to be passed to your app by the debugger.
* `"stopAtEntry"` - Setting to "true" forces a break on your main() function. Default value is false.
* `"cwd"` - Sets the working directory of the application launched by the debugger.
* `"environment"` - Environment variables to add to the environment for the program.


More information about all the `launch.json` features can be found at [Configuring C/C++ debugging](https://code.visualstudio.com/docs/cpp/launch-json-reference).



## Memory Viewing
VS Code's generic debugger now includes a feature for viewing binary data. When a variable supports memory viewing and editing, an inline binary icon appears in the Variables view. Clicking on the icon opens the Hex Editor, allowing to perform operations on the binary data.
This functionality appears in the Variables and Watch panels. Clicking on the icon opens the Hex Editor, in which is possible to inspect conveniently large pieces of data. 


## Differences Between vanilla GDB and MetaWare Debugger
To display the differences between these two distributions of GDB:
1. Press `Ctrl+Shift+P ( or View -> Command Palette... )` to open the Command Palette.
2. Type **help** to see help commands.
4. For quick access to MetaWare Online Documentation, see `MetaWare ARC: Open MetaWare ARC debugger online documentation (help)`.

## Troubleshooting

## Contributing
Install Visual Studio Code (version 1.42, or newer) and open this project within it. You also need `node + yarn`.
- Switch to project root folder.
- `yarn install`
- `code .`

At this point you should be able to run the extension in the "Extension
Development Host".


