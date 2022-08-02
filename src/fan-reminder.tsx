import {runAppleScript} from 'run-applescript';

interface Arguments {
    add: string;
}

export default async (props: { arguments: Arguments }) => {
    const args = props.arguments;
    const text = `tell application \"Fantastical\" 
                    \n parse sentence \"Todo ${args.add}\" 
                \n end tell`
    await runAppleScript(text);
};