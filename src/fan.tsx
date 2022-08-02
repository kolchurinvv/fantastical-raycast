import {runAppleScript} from 'run-applescript';

interface Arguments {
    add: string;
}

export default async (props: { arguments: Arguments }) => {
    const args = props.arguments;
    await runAppleScript(`
    tell application \"Fantastical\" 
        \n parse sentence \"${args.add}\" \n
    end tell`
    );
};